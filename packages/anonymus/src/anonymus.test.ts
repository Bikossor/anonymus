import { expect, it } from "vitest";
import { createAnonymusGenerator } from "./anonymus";

it("should return two words separated by a whitespace", () => {
  const anonymus = createAnonymusGenerator();

  expect(anonymus.next().value).toMatch(/^\w+\s\w+$/);
});
