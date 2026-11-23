import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY_FILE = join(OUTPUT_DIR, 'entry.txt');
const LINE = "My phone's on silent so I can ignore the one person I'm waiting to hear from.";

if (!LINE.trim() || LINE.length > 200) {
  throw new Error('Invalid line: must be non-blank and ≤200 chars');
}

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

writeFileSync(ENTRY_FILE, LINE);
console.log(`Wrote entry to ${ENTRY_FILE} (${LINE.length} chars)`);