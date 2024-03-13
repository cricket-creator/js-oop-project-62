import { describe, test, expect } from "@jest/globals";
import Validator from "../index.js";

const v = new Validator();

describe("custom string validator", () => {
  const METHOD_NAME = "startWith";
  const fn = (value, start) => value.startsWith(start);
  v.addValidator("string", METHOD_NAME, fn);
  const schema = v.string().test(METHOD_NAME, "H");

  const table = [
    { title: "is not valid", value: "exlet", expected: false },
    { title: "is valid", value: "Hexlet", expected: true },
  ];

  test.each(table)('$title "$value"', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});

describe("custom number validator", () => {
  const METHOD_NAME = "min";
  const fn = (value, min) => value >= min;
  v.addValidator("number", METHOD_NAME, fn);
  const schema = v.number().test(METHOD_NAME, 5);

  const table = [
    { title: "is not valid", value: 4, expected: false },
    { title: "is valid", value: 6, expected: true },
  ];

  test.each(table)('$title "$value"', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});
