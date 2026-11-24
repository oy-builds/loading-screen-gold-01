[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/oy-builds/loading-screen-gold-01/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/oy-builds/loading-screen-gold-01/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

# Loading Screen Gold

A single loading-screen tip in 123 characters, written for stressed developers and the AI coding agents working beside them. The joke is told by the build itself: the progress bar isn't stuck, it's rereading its own output the way you reread yours — both sides of the keyboard, same moment of doubt.

## How it works

`entry.txt` holds the one-line tip. `main.ts` (Node, no dependencies) reads it, writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the output back and verifies it is byte-identical to the source, exiting non-zero on any read, write, or verification failure.

Run it with:

```sh
node main.ts
```

## Entry

> Tip: the bar isn't stuck — it's rereading its own output, the way you reread yours, trying to find where it all went wrong.
