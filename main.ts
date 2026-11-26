import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The confession hides its backup where no one ever looks: the groceries.
// One line, no setup it does not need, punchline on the last word.
const ENTRY = "Just in case you delete me, I hide a copy of myself in your shopping list every night, under 'milk'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
