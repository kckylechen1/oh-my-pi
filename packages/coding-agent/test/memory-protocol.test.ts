import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { InternalUrlRouter } from "@oh-my-pi/pi-coding-agent/internal-urls";
import { MemoryProtocolHandler } from "@oh-my-pi/pi-coding-agent/internal-urls/memory-protocol";
import { openMemoryDb, closeMemoryDb, upsertThreads, type MemoryThread } from "@oh-my-pi/pi-coding-agent/memories/storage";
import { Snowflake } from "@oh-my-pi/pi-utils";
import { getAgentDbPath } from "@oh-my-pi/pi-utils/dirs";

const createdDirs = new Set<string>();

async function makeTempDir(prefix: string): Promise<string> {
	const dir = path.join(os.tmpdir(), `${prefix}-${Snowflake.next()}`);
	await fs.mkdir(dir, { recursive: true });
	createdDirs.add(dir);
	return dir;
}

afterEach(async () => {
	for (const dir of createdDirs) {
		await fs.rm(dir, { recursive: true, force: true });
	}
	createdDirs.clear();
});

describe("MemoryProtocolHandler", () => {
	let testDir: string;
	let agentDir: string;
	let memoryRoot: string;
	let handler: MemoryProtocolHandler;
	let router: InternalUrlRouter;

	beforeEach(async () => {
		testDir = await makeTempDir("memory-protocol-test");
		agentDir = path.join(testDir, "agent");
		memoryRoot = path.join(testDir, "memories", "test-cwd");
		await fs.mkdir(memoryRoot, { recursive: true });
		await fs.mkdir(agentDir, { recursive: true });

		handler = new MemoryProtocolHandler({
			getMemoryRoot: () => memoryRoot,
			getCwd: () => "/test/cwd",
			getAgentDir: () => agentDir,
		});

		router = new InternalUrlRouter();
		router.register(handler);
	});

	test("handler has correct scheme", () => {
		expect(handler.scheme).toBe("memory");
	});

	test("router can handle memory:// URLs", () => {
		expect(router.canHandle("memory://root")).toBe(true);
		expect(router.canHandle("memory://thread/id")).toBe(true);
		expect(router.canHandle("https://example.com")).toBe(false);
	});

	test("memory://root returns virtual info without exposing filesystem path", async () => {
		const result = await router.resolve("memory://root");
		expect(result.url).toBe("memory://root");
		expect(result.content).toContain("Memory root directory");
		expect(result.content).not.toContain(memoryRoot); // Should NOT expose actual path
		expect(result.content).not.toContain(testDir); // Should NOT expose actual path
		expect(result.contentType).toBe("text/plain");
		expect(result.sourcePath).toBeUndefined(); // Should NOT have sourcePath
	});

	test("memory://root/memory_summary.md reads file", async () => {
		const summaryPath = path.join(memoryRoot, "memory_summary.md");
		await fs.writeFile(summaryPath, "# Test Summary\nThis is a test.");

		const result = await router.resolve("memory://root/memory_summary.md");
		expect(result.url).toBe("memory://root/memory_summary.md");
		expect(result.content).toBe("# Test Summary\nThis is a test.");
		expect(result.contentType).toBe("text/markdown");
		expect(result.sourcePath).toBe(summaryPath);
		expect(result.size).toBeGreaterThan(0);
	});

	test("memory://root/MEMORY.md reads file", async () => {
		const memoryPath = path.join(memoryRoot, "MEMORY.md");
		await fs.writeFile(memoryPath, "# Memory Content");

		const result = await router.resolve("memory://root/MEMORY.md");
		expect(result.content).toBe("# Memory Content");
		expect(result.contentType).toBe("text/markdown");
	});

	test("memory://root/skills/test/SKILL.md reads nested file", async () => {
		const skillDir = path.join(memoryRoot, "skills", "test");
		await fs.mkdir(skillDir, { recursive: true });
		const skillPath = path.join(skillDir, "SKILL.md");
		await fs.writeFile(skillPath, "# Test Skill");

		const result = await router.resolve("memory://root/skills/test/SKILL.md");
		expect(result.content).toBe("# Test Skill");
		expect(result.contentType).toBe("text/markdown");
	});

	test("memory://root with non-existent file throws error", async () => {
		await expect(router.resolve("memory://root/nonexistent.md")).rejects.toThrow(/not found/);
	});

	test("memory://root blocks path traversal", async () => {
		await expect(router.resolve("memory://root/../../../etc/passwd")).rejects.toThrow(/traversal/);
	});

	test("memory://root blocks absolute paths", async () => {
		await expect(router.resolve("memory://root//etc/passwd")).rejects.toThrow(/traversal|not allowed/);
	});

	test("memory://thread/<id> reads rollout file by opaque ID", async () => {
		const rolloutPath = path.join(testDir, "rollout.jsonl");
		await fs.writeFile(rolloutPath, '{"test":"data"}');

		// Insert thread into database
		const dbPath = getAgentDbPath(agentDir);
		const db = openMemoryDb(dbPath);
		const threadId = "test-thread-123";
		try {
			const thread: MemoryThread = {
				id: threadId,
				updatedAt: Date.now(),
				rolloutPath,
				cwd: "/test/cwd",
				sourceKind: "cli",
			};
			upsertThreads(db, [thread]);
		} finally {
			closeMemoryDb(db);
		}

		// Resolve using opaque thread ID
		const result = await router.resolve(`memory://thread/${threadId}`);
		expect(result.content).toBe('{"test":"data"}');
		expect(result.contentType).toBe("text/plain");
		expect(result.sourcePath).toBe(rolloutPath);
		expect(result.notes).toEqual([`Thread ID: ${threadId}`]);
	});

	test("memory://thread with non-existent thread throws error", async () => {
		await expect(router.resolve("memory://thread/nonexistent-id")).rejects.toThrow(/not found/);
	});

	test("memory://thread requires thread ID", async () => {
		await expect(router.resolve("memory://thread/")).rejects.toThrow(/requires a thread ID/);
	});

	test("memory:// with unknown type throws error", async () => {
		await expect(router.resolve("memory://unknown/path")).rejects.toThrow(/Unknown memory type/);
	});

	test("JSON files return correct content type", async () => {
		const jsonPath = path.join(memoryRoot, "test.json");
		await fs.writeFile(jsonPath, '{"key":"value"}');

		const result = await router.resolve("memory://root/test.json");
		expect(result.contentType).toBe("application/json");
	});

	test("Plain text files return correct content type", async () => {
		const txtPath = path.join(memoryRoot, "test.txt");
		await fs.writeFile(txtPath, "plain text content");

		const result = await router.resolve("memory://root/test.txt");
		expect(result.contentType).toBe("text/plain");
	});
});
