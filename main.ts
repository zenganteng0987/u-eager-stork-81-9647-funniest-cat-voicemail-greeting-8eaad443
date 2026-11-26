import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — one line, at most 120 characters.
// A pompous cat chairman, napping on the caller's keyboard, hijacks the
// voicemail itself: leave food, and don't expect a callback.
const greeting =
  "You've reached Chairman Whiskers. I'm napping on your keyboard. Leave food after the beep — I never call back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", greeting, "utf8");
