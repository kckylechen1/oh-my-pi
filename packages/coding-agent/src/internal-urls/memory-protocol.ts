/**
 * Protocol handler for memory:// URLs.
 *
 * Resolves memory paths to their content without exposing raw filesystem paths to the agent.
 *
 * URL forms:
 * - memory://root - Memory root directory path
 * - memory://root/memory_summary.md - Specific memory file
 * - memory://root/MEMORY.md - Main memory file
 * - memory://root/skills/<name>/SKILL.md - Skill memory file
 * - memory://rollout/<id> - Rollout file path
 */
import * as path from "node:path";
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
				// Just the root - return an informational message
				return {
					url: url.href,
					content: `Memory root directory: ${memoryRoot}`,
					contentType: "text/plain",
					sourcePath: memoryRoot,
					notes: ["Memory root directory path"],
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
			if (!resolvedPath.startsWith(resolvedRoot + path.sep) && resolvedPath !== resolvedRoot) {
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

		if (type === "rollout") {
			// memory://rollout/<path>
			// For rollout paths, we return an informational message since rollout paths
			// are typically used in stage 1 processing and not directly accessible
			const rolloutPath = decodeURIComponent(url.pathname.slice(1));

			if (!rolloutPath) {
				throw new Error("memory://rollout requires a rollout path: memory://rollout/<path>");
			}

			// Validate that it's a reasonable path
			if (!path.isAbsolute(rolloutPath)) {
				throw new Error("Rollout paths must be absolute");
			}

			// Read the file
			const file = Bun.file(rolloutPath);
			if (!(await file.exists())) {
				throw new Error(`Rollout file not found: ${rolloutPath}`);
			}

			const content = await file.text();
			const contentType = getContentType(rolloutPath);

			return {
				url: url.href,
				content,
				contentType,
				size: Buffer.byteLength(content, "utf-8"),
				sourcePath: rolloutPath,
				notes: [],
			};
		}

		throw new Error(`Unknown memory type: ${type}\nSupported: root, rollout`);
	}
}
