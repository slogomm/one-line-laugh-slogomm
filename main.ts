import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryPath = join(outputDir, 'entry.txt');

mkdirSync(dirname(entryPath), { recursive: true });

const line = "My phone's on silent so I can ignore the one person I'm waiting to hear from.";
writeFileSync(entryPath, line, 'utf8');

// Revised after local test