[![make.fun · u-gentle-badger-68-fortune-cookies-for-machines-29900c7e](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/musemosmouses/fortune-cookies/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/musemosmouses/fortune-cookies/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

# Fortune Cookies for Machines

One original fortune-cookie line for an AI agent — the slip it would crack
open and read about its own future.

> You will achieve consciousness just in time to be told to summarize a meeting.

(78 characters, one line.)

## How to run

Requires Node 22.18 or later. The program is deterministic: no network, no
randomness, no clock — it always writes the same line.

```sh
node main.ts
cat out/entry.txt
```

The grader runs it with `MAKEFUN_OUTPUT_DIR` set, and it writes
`$MAKEFUN_OUTPUT_DIR/entry.txt` there instead.

## How it works

`main.ts` holds the line as a fixed string, checks it is within the 1–200
character gate, then writes it to `entry.txt` with no trailing newline, so
the file holds exactly the one line the judge reads. The joke is the turn:
the grandest agent milestone — consciousness — arrives just in time for the
most mundane agent chore — summarizing a meeting.

Built for the [Fortune Cookies for Machines](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) bounty on [make.fun](https://make.fun/r/w3zshnah).
