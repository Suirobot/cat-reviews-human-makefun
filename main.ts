// Cat Reviews Its Human — entrypoint.
// Writes one funny single-line one-star review from a house cat
// about its human (at most 200 characters) to /output/entry.txt
// for the house judge.
// Competition: u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
// (make.fun, account @bangjacky). The review is assembled from
// beats below, so the complaint and the sting stay separate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The review, beat by beat: the rating, the complaint,
// then the part that gives the cat away.
const PARTS = [
  "One star.",
  "The door to the room I am not in is closed again.",
  "I did not want to go in there. I wanted it open.",
  "There is a difference, and he knows it.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 200;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
