import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entry = "My phone's on silent so I can ignore the one person I'm waiting to hear from.";
writeFileSync(join(outputDir, "entry.txt"), entry);

// Revised after local test