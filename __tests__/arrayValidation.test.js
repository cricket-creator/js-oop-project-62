import { describe, test, expect } from "@jest/globals";
import Validator from "../index.js";

const v = new Validator();

describe("default", () => {
  const schema = v.array();

  const table = [null, undefined];

  test.each(table)('is valid: "%s"', (value) => {
    expect(schema.isValid(value)).toBe(true);
  });
});

describe("required method", () => {
  const schema = v.array().required();

  const table = [
    {
      title: "is valid",
      value: [],
      expected: true,
    },
    { title: "is valid", value: ["hexlet"], expected: true },
    { title: "is not valid", value: null, expected: false },
    { title: "is not valid", value: undefined, expected: false },
  ];

  test.each(table)('$title if required: "$value"', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});

describe("sizeof method", () => {
  const schema = v.array().sizeof(2);

  const table = [
    {
      title: "is not valid",
      value: ["hexlet"],
      expected: false,
    },
    { title: "is valid", value: ["hexlet", "code-basics"], expected: true },
    {
      title: "is not valid",
      value: ["hexlet", "code-basics", "code"],
      expected: false,
    },
    { title: "is not valid", value: null, expected: false },
    { title: "is not valid", value: undefined, expected: false },
  ];

  test.each(table)('$title if required: "$value"', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});
