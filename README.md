# The Great Renaming

Entry for make.fun bounty **ai-joke-03 — "Make the AI judge laugh"**.

Owner: tapetelo

## The joke

> I asked my agent to rename a variable. It renamed it in 400 files, in three languages, and committed it as 'The Great Renaming.'

## How it works

`main.ts` (Node 22, standard library only) writes the joke above, exactly and
with no trailing newline, to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set). The output is
fully deterministic: the same bytes on every run, with no network access.
