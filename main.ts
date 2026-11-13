// ai-joke-03 entry: "No deploys on Friday".
// The joke is learned caution: the agent refuses the classic Friday deploy
// not out of fear, but because it has read the team's postmortems — the one
// developer superstition every engineer recognises at once. One fixed joke,
// written verbatim, no trailing newline — the judge reads exactly these bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = "My coding agent refused to deploy on Friday. I asked why. It said, 'I read your postmortems.'";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
