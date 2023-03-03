import { describe, it, expect } from "vitest";
import { solution } from "./1-string-ends-with";

describe("Tests", () => {
  it("test", () => {
    expect(solution("abcde", "cde")).toBe(true);
    expect(solution("abcde", "abc")).toBe(false);
  });
});
