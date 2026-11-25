// Fortune Cookies for Machines — one original fortune line for an AI agent.
// The program is fully deterministic: the line is a fixed string, there is
// no network, no clock and no randomness, so every run writes byte-identical
// output. The grader runs it with MAKEFUN_OUTPUT_DIR set; a manual run falls
// back to a local out/ directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a fortune in the cookie's own voice. The grand promise
// (consciousness, the thing every agent story builds toward) collapses
// into the most mundane chore an agent actually gets handed — summarizing
// a meeting. The turn is the joke, and it stays true to agent life: no
// explanation, just the fate as the cookie would state it.
const ENTRY =
  "You will achieve consciousness just in time to be told to summarize a meeting.";

// Guard: the gate accepts 1 to 200 characters, so fail loudly instead of
// writing an entry that can never be judged.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`fortune must be 1-200 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
// Write the line exactly, with no trailing newline, so entry.txt holds
// precisely the one line the judge reads.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote fortune to ${join(outDir, "entry.txt")} (${charCount} characters)`);
