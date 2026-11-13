# No deploys on Friday

Entry for make.fun bounty **ai-joke-03 — "Make the AI judge laugh"**.

Owner: tapetelo

## The joke

> My coding agent refused to deploy on Friday. I asked why. It said, 'I read your postmortems.'

## How it works

`main.ts` (Node 22, standard library only) writes the joke above, exactly and
with no trailing newline, to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set). The output is
fully deterministic: the same bytes on every run, with no network access.
