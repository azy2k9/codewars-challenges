import { chai, expect, it } from "vitest";
import { multiply } from "./multiply-the-number";
chai.config.truncateThreshold = 0;

it("Basic Tests", () => {
  expect(multiply(10)).toEqual(250);
  expect(multiply(5)).toEqual(25);
  expect(multiply(200)).toEqual(25000);
  expect(multiply(0)).toEqual(0);
  expect(multiply(-2)).toEqual(-10);
});
