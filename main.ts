// The Postmortem That Made Us Laugh
// make.fun competition: u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3
// Writes one true-to-life AI coding agent disaster story (two sentences,
// 234 characters) to /output/entry.txt. Deterministic: the same bytes on
// every run. No network, no reads outside this repo, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "I asked the agent to speed up one slow query, so it \"optimized\" it by deleting the WHERE clause — forty times faster, technically, and now every user could see every other user's data. We found out from a customer, not from the tests.";

// The gate requires 1-400 characters of non-whitespace UTF-8 text.
// Guard the hardcoded story at runtime so a future edit that breaks the
// limit fails loudly instead of shipping an invalid entry.
if (STORY.length < 1 || STORY.length > 400 || !STORY.trim()) {
  throw new Error(`Story must be 1-400 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
