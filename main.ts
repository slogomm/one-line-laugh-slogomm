import { mkdirSync, writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outputDir}/entry.txt`;
const line = "I go to bed early so I can lie awake in comfort.";

if (!line.trim()) throw new Error("Entry must not be blank");
if (line.length > 200) throw new Error(`Entry exceeds 200 characters (${line.length})`);

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, line);

console.log(`Wrote entry.txt (${line.length} chars) to ${entryPath}`);