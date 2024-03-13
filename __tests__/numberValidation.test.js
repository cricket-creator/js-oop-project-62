import { describe, test, expect } from '@jest/globals';
import Validator from '../index.js';

const v = new Validator();

describe('default', () => {
  const schema = v.number();

  const table = [{ value: null, expected: true }];

  test.each(table)('is valid "$value"', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});

describe('required method', () => {
  const schema = v.number().required();

  const table = [
    { title: 'is not valid', value: null, expected: false },
    { title: 'is valid', value: 7, expected: true },
  ];

  test.each(table)('$title: $value', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});

describe('positive method', () => {
  const schema = v.number().positive();
  const INTEGER = 10;

  it(`is positive integer: ${INTEGER}`, () => {
    expect(schema.isValid(INTEGER)).toBe(true);
  });
});

describe('range method', () => {
  const schema = v.number().positive().range(-5, 5);

  const table = [
    { value: -3, expected: false },
    { value: 5, expected: true },
  ];

  test.each(table)('is $value in range (-5, 5)', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});
