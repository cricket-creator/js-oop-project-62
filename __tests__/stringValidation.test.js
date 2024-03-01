import { describe, test, expect } from "@jest/globals";
import Validator from "../index.js";

describe("default", () => {
  const v = new Validator();
  const stringSchema = v.string();

  const table = ["", null, undefined];

  test.each(table)('is valid: "%s"', (value) => {
    expect(stringSchema.isValid(value)).toBe(true);
  });
});

describe("required method", () => {
  const v = new Validator();
  const stringSchema = v.string().required();

  const table = [
    {
      title: "is valid",
      value: "what does the fox say",
      expected: true,
    },
    { title: "is valid", value: "hexlet", expected: true },
    { title: "is not valid", value: null, expected: false },
    { title: "is not valid", value: "", expected: false },
  ];

  test.each(table)('$title if required: "$value"', ({ value, expected }) => {
    expect(stringSchema.isValid(value)).toBe(expected);
  });
});

const VALUE = "what does the fox say";
describe(`"${VALUE}"`, () => {
  const v = new Validator();
  const stringSchema = v.string();

  const table = [
    { title: "contains", value: "what", expected: true },
    { title: "doesn't contains", value: "whatthe", expected: false },
  ];

  test.each(table)('$title "$value"', ({ value, expected }) => {
    stringSchema.contains(value);
    expect(stringSchema.isValid(VALUE)).toBe(expected);
  });

  test("validate with last contained result", () => {
    expect(stringSchema.isValid(VALUE)).toBe(false);
  });
});

describe("length method", () => {
  const v = new Validator();
  const stringSchema = v.string();

  test("is valid length", () => {
    stringSchema.minLength(10).minLength(4);
    expect(stringSchema.isValid("Hexlet")).toBe(true);
  });
});
