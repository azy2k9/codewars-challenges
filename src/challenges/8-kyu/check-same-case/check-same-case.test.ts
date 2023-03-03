import { describe, chai, assert, it } from "vitest";
import { sameCase } from "./check-same-case";
chai.config.truncateThreshold = 0;

export function testCheckCase(a: string, b: string, expected: number) {
  it(`Testing for "${a}" and "${b}"`, function () {
    assert.strictEqual(sameCase(a, b), expected, `For sameCase("${a}","${b}")`);
  });
}

describe("Solution", function () {
  testCheckCase("C", "B", 1);
  testCheckCase("b", "a", 1);
  testCheckCase("d", "d", 1);
  testCheckCase("A", "s", 0);
  testCheckCase("c", "B", 0);
  testCheckCase("b", "Z", 0);
  testCheckCase("\t", "Z", -1);
  testCheckCase("H", ":", -1);
});
