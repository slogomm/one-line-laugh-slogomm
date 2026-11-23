#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entry = "I only meal prep anxiety.";
if (entry.length > 200) {
  throw new Error(`Entry exceeds 200 characters: ${entry.length}`);
}
if (!entry.trim()) {
  throw new Error("Entry is blank");
}
if (!entry.endsWith(".")) {
  throw new Error("Entry must end with a period (one sentence)");
}

writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");
console.log(`Wrote entry (${entry.length} chars) to ${outputDir}/entry.txt`);