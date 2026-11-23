import { mkdirSync, writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

const line = "My phone's on silent so I can ignore the one person I'm waiting to hear from.";
writeFileSync(entryPath, line);

console.log(`Wrote entry to ${entryPath}`);
console.log(`Character count: ${line.length}`);