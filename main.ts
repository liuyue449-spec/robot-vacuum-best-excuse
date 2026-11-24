// The Robot Vacuum's Best Excuse
// make.fun bounty: u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
// Writes one funny one-line excuse (<= 140 chars) to /output/entry.txt.
// The line is the vacuum itself talking, deadpan, rooted in its own world:
// its cliff sensor mistakes the rug fringe for a staircase, and it refuses
// to do stairs. One clean turn at the end, no setup to explain.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I didn't miss that spot. My cliff sensor saw the rug fringe, called it a staircase, and I don't do stairs.";

// The output directory honours MAKEFUN_OUTPUT_DIR when set (local re-runs
// and isolated verification), falling back to the grader's /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${join(outDir, "entry.txt")}`);
