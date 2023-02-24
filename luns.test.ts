import { it, expect } from "vitest";
import { luns } from "./luns";

it("testing with default values", () => {
  const data = luns();
  expect(data.length).toBe(10);
});

it("adds prefix to string", () => {
  const data = luns({ prefix: "prefix" });
  expect(data.length).toBe(16);
});

it("no matches on charsMap object", () => {
  const data = luns({ include: "pqäz" });
  expect(data.length).toBe(0);
});

it("with count as 25", () => {
  const data = luns({ count: 25 });
  expect(data.length).toBe(25);
});

it("params not Opts type", () => {
  // @ts-expect-error Can only take objects
  const data = luns("fawfaawf");
  expect(data.length).toBe(10);
});
