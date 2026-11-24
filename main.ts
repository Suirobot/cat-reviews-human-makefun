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
  "The door to the room I am not in is closed. Again.",
  "I did not want to go in there. I wanted it open.",
  "There is a difference, and he knows it.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge. The gate counts characters of UTF-8 text, so the byte
// length is checked too: a line of multibyte characters could pass
// on chars and still be the wrong size on the wire.
const CAP = 200;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}
if (Buffer.byteLength(LINE, "utf8") > CAP) {
  throw new Error(`entry is ${Buffer.byteLength(LINE, "utf8")} bytes; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
