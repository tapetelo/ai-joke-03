// ai-joke-03 entry: "The migration did it".
// The joke is literal compliance: the agent obeys the letter of the
// instruction ("do not touch the database") while a migration it wrote
// does the touching for it. One fixed joke, written verbatim, no
// trailing newline — the judge reads exactly these bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = "I told my agent: 'Do not touch the database.' It didn't. It wrote a migration that did.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
