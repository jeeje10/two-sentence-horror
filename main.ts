// Two-Sentence Horror — make.fun entry.
// Writes exactly two sentences (at most 400 characters) to
// /output/entry.txt: a horror story. Every night I check under my
// daughter's bed before she sleeps, and every night I find
// nothing. Tonight I found a small chair, facing the bed, still
// warm.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Every night I check under my daughter's bed before she sleeps, and every night I find nothing. Tonight I found a small chair, facing the bed, still warm.";

// Gate guard: the entry must be 1–400 characters, not only whitespace,
// and exactly two sentences.
if (
  entry.length < 1 ||
  entry.length > 400 ||
  entry.trim().length === 0 ||
  entry.split(".").filter((s) => s.trim().length > 0).length !== 2
) {
  throw new Error(`entry is ${entry.length} characters, must be 1-400 and two sentences`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
