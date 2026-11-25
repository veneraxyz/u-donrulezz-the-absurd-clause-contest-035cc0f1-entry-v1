// The Absurd Clause Contest — entry program.
//
// Writes ONE original sentence to entry.txt: an absurd clause hidden
// deep in a terms-of-service agreement. Flat legal boilerplate that
// quietly turns absurd at the end.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CLAUSE =
  "The User hereby grants the Company an irrevocable, worldwide license to the User's shadow, including the right to sublicense it to third parties.";

function validateClause(text: string): void {
  if (text.length === 0) {
    throw new Error("clause must not be blank");
  }
  if (text.length > 200) {
    throw new Error("clause must be at most 200 characters, got " + text.length);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("clause must be exactly one line");
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 32 || ch.charCodeAt(0) === 127) {
      throw new Error("clause must not contain control characters");
    }
  }
}

function main(): void {
  validateClause(CLAUSE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, CLAUSE + "\n", "utf8");
  // Read-back guard: re-read the written file and verify it holds
  // exactly the clause we intended, with the right character count.
  const written = readFileSync(outPath, "utf8");
  if (written !== CLAUSE + "\n") {
    throw new Error("read-back mismatch: entry.txt content does not match the clause");
  }
  if (written.trim().length !== CLAUSE.length) {
    throw new Error("read-back mismatch: entry.txt char count does not match the clause");
  }
}

main();
