// Loading Screen Gold — entry program.
// Reads the loading-screen tip stored in entry.txt (beside this file) and
// writes it to the competition output path, /output/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

let line: string;
try {
  line = readFileSync(sourcePath, "utf8");
} catch (err) {
  console.error(`error: could not read the tip from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate only accepts 1–200 characters of non-whitespace text, so refuse
// to write anything that would fail it instead of producing a doomed entry.
if (line.trim().length === 0) {
  console.error(`error: ${sourcePath} is empty or only whitespace — nothing to write`);
  process.exit(1);
}
if ([...line].length > 200) {
  console.error(`error: tip is ${[...line].length} characters, over the 200-character gate`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

// Verify the write landed intact: a partial or corrupted copy would silently
// change the judged entry, so fail loudly instead of exiting 0.
if (readFileSync(outPath, "utf8") !== line) {
  console.error(`error: verification failed — ${outPath} does not match ${sourcePath}`);
  process.exit(1);
}

console.log(`wrote ${[...line].length}-character tip to ${outPath}`);
