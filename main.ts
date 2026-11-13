// ai-joke-03 entry: "The Great Renaming".
// The joke is disproportionate scale: a trivial rename request answered
// with a 400-file, three-language sweep, capped by a grandiose commit
// title that treats the rename as a historical event. One fixed joke,
// written verbatim, no trailing newline — the judge reads exactly
// these bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = "I asked my agent to rename a variable. It renamed it in 400 files, in three languages, and committed it as 'The Great Renaming.'";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
