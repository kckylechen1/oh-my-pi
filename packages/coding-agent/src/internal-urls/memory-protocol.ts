/**
 * Protocol handler for memory:// URLs.
 *
 * Resolves memory paths to their content without exposing raw filesystem paths to the agent.
 *
 * URL forms:
 * - memory://root - Memory root directory (virtual info only)
 * - memory://root/memory_summary.md - Specific memory file
 * - memory://root/MEMORY.md - Main memory file
 * - memory://root/skills/<name>/SKILL.md - Skill memory file
 * - memory://thread/<id> - Thread/rollout file by opaque ID
 */
import * as path from "node:path";
import { getAgentDbPath } from "@oh-my-pi/pi-utils/dirs";
import { getThreadById, openMemoryDb, closeMemoryDb } from "../../memories/storage";
import type { InternalResource, InternalUrl, ProtocolHandler } from "./types";

export interface MemoryProtocolOptions {
	/**
	 * Returns the memory root directory for the current working directory.
	 * @param cwd Current working directory
	 */
	getMemoryRoot: (cwd: string) => string;
	/**
	 * Returns the current working directory.
	 */
	getCwd: () => string;
	/**
	 * Returns the agent directory.
	 */
	getAgentDir: () => string;
}

/**
 * Get content type based on file extension.
 */
function getContentType(filePath: string): InternalResource["contentType"] {
	const ext = path.extname(filePath).toLowerCase();
	if (ext === ".md") return "text/markdown";
	if (ext === ".json") return "application/json";
	return "text/plain";
}

/**
 * Validate that a path is safe (no traversal outside allowed directories).
 */
function validateRelativePath(relativePath: string): void {
	if (path.isAbsolute(relativePath)) {
		throw new Error("Absolute paths are not allowed in memory:// URLs");
	}

	const normalized = path.normalize(relativePath);
	// Check for .. in path segments (platform-independent)
	const segments = normalized.split(path.sep);
	if (segments.some(seg => seg === "..")) {
		throw new Error("Path traversal (..) is not allowed in memory:// URLs");
	}
}

/**
 * Handler for memory:// URLs.
 *
 * Resolves memory paths to their content.
 */
export class MemoryProtocolHandler implements ProtocolHandler {
	readonly scheme = "memory";

	constructor(private readonly options: MemoryProtocolOptions) {}

	async resolve(url: InternalUrl): Promise<InternalResource> {
		const type = url.rawHost || url.hostname;
		const cwd = this.options.getCwd();

		if (type === "root") {
			// memory://root or memory://root/<path>
			const memoryRoot = this.options.getMemoryRoot(cwd);
			const urlPath = url.pathname;

			if (!urlPath || urlPath === "/" || urlPath === "") {
				// Just the root - return virtual info without exposing filesystem path
				return {
					url: url.href,
					content: "Memory root directory for current project",
					contentType: "text/plain",
					notes: ["Virtual memory root reference"],
				};
			}

			// Read specific file within memory root
			const relativePath = decodeURIComponent(urlPath.slice(1)); // Remove leading /
			validateRelativePath(relativePath);
			const targetPath = path.join(memoryRoot, relativePath);

			// Verify the resolved path is still within memoryRoot
			// Use lowercase comparison for case-insensitive filesystems
			const resolvedPath = path.resolve(targetPath).toLowerCase();
			const resolvedRoot = path.resolve(memoryRoot).toLowerCase();
			// Check: path equals root OR path is within root (starts with root + separator)
			if (resolvedPath !== resolvedRoot && !resolvedPath.startsWith(resolvedRoot + path.sep)) {
				throw new Error("Path traversal is not allowed");
			}

			// Read the file
			const file = Bun.file(targetPath);
			if (!(await file.exists())) {
				throw new Error(`Memory file not found: ${relativePath}`);
			}

			const content = await file.text();
			const contentType = getContentType(targetPath);

			return {
				url: url.href,
				content,
				contentType,
				size: Buffer.byteLength(content, "utf-8"),
				sourcePath: targetPath,
				notes: [],
			};
		}

		if (type === "thread") {
			// memory://thread/<threadId>
			// Resolve opaque thread ID to rollout file server-side
			const threadId = decodeURIComponent(url.pathname.slice(1));

			if (!threadId) {
				throw new Error("memory://thread requires a thread ID: memory://thread/<id>");
			}

			// Look up thread in database
			const agentDir = this.options.getAgentDir();
			const dbPath = getAgentDbPath(agentDir);
			const db = openMemoryDb(dbPath);
			let thread;
			try {
				thread = getThreadById(db, threadId);
			} finally {
				closeMemoryDb(db);
			}

			if (!thread) {
				throw new Error(`Thread not found: ${threadId}`);
			}

			// Read the rollout file
			const file = Bun.file(thread.rolloutPath);
			if (!(await file.exists())) {
				throw new Error(`Rollout file not found for thread: ${threadId}`);
			}

			const content = await file.text();
			const contentType = getContentType(thread.rolloutPath);

			return {
				url: url.href,
				content,
				contentType,
				size: Buffer.byteLength(content, "utf-8"),
				sourcePath: thread.rolloutPath,
				notes: [`Thread ID: ${threadId}`],
			};
		}

		throw new Error(`Unknown memory type: ${type}\nSupported: root, thread`);
	}
}
