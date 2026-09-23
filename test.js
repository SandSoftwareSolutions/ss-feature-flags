import assert from "node:assert/strict";
import test from "node:test";
import { evaluate, inRollout } from "./src/index.js";
test("keeps a subject consistently in or out of a rollout", () => assert.equal(inRollout("new-ui", "user-42", 25), inRollout("new-ui", "user-42", 25)));
test("honours allow and deny lists", () => {
  assert.equal(evaluate({ key: "beta", enabled: true, allow: ["a"] }, { id: "a" }), true);
  assert.equal(evaluate({ key: "beta", enabled: true, deny: ["a"] }, { id: "a" }), false);
});
test("can fully disable a flag", () => assert.equal(evaluate({ key: "beta", enabled: false }, { id: "a" }), false));
