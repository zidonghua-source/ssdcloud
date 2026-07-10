import test from "node:test";
import assert from "node:assert/strict";
import { normalizeOptionalParentId, sortDriveItems } from "../src/services/driveItems.js";

test("normalizeOptionalParentId handles root-like values", () => {
  assert.equal(normalizeOptionalParentId(undefined), null);
  assert.equal(normalizeOptionalParentId(""), null);
  assert.equal(normalizeOptionalParentId("root"), null);
  assert.equal(normalizeOptionalParentId("null"), null);
  assert.equal(normalizeOptionalParentId("abc123"), "abc123");
});

test("sortDriveItems puts folders before files", () => {
  const sorted = sortDriveItems([
    { type: "file", name: "z.txt" },
    { type: "folder", name: "b-folder" },
    { type: "file", name: "a.txt" },
    { type: "folder", name: "a-folder" },
  ]);

  assert.deepEqual(
    sorted.map((item) => `${item.type}:${item.name}`),
    ["folder:a-folder", "folder:b-folder", "file:a.txt", "file:z.txt"]
  );
});
