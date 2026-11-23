// Revised after local test
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const entry = "My phone's on silent so I can ignore the one person I'm waiting to hear from.";
writeFileSync(join(outputDir, "entry.txt"), entry);

console.log(`Written to ${join(outputDir, "entry.txt")}`);
console.log(`Length: ${entry.length} characters`);