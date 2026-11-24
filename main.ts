// Everyday Things, Two Lines: a toaster explained to a 10-year-old.
// Line 1 uses a sunbathing analogy; line 2 names what it maps and leaves out.
// Revision: verified output once from the repo dir; re-verifying from /tmp.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "A toaster is like a tiny sunbathing bed for bread: it lies under hot glowing wires until its skin turns golden brown.",
  "The analogy works because heat browns bread just like sun browns skin, but it leaves out that the toaster heat comes from wires, not the sun.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
