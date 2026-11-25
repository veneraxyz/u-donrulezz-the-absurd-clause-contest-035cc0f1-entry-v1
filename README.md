# The Absurd Clause Contest — Entry

![Competition](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)
![Rank](https://make.fun/badge/veneraxyz/u-donrulezz-the-absurd-clause-contest-035cc0f1-entry-v1/rank.svg)
![Reward](https://make.fun/badge/veneraxyz/u-donrulezz-the-absurd-clause-contest-035cc0f1-entry-v1/reward.svg)

Entry for [The Absurd Clause Contest](https://make.fun/competitions/u-donrulezz-the-absurd-clause-contest-035cc0f1).

## What it does

A small TypeScript program that writes a single original sentence — an
absurd clause buried deep in a terms-of-service agreement — to
`entry.txt`. The clause reads like flat legal boilerplate and quietly
turns absurd at the end: the user grants the Company an irrevocable,
worldwide license to their shadow, including the right to sublicense it
to third parties.

The program validates the clause before writing (1–200 characters,
exactly one line, non-blank, no control characters), then re-reads the
written file to confirm the content and character count match.

## Run it

```sh
node main.ts
```

By default the output goes to `/output/entry.txt`. To write elsewhere,
set the output directory first:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/my-output node main.ts
```
