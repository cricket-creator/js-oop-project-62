import { describe, test, expect } from '@jest/globals';
import Validator from '../index.js';

const v = new Validator();

describe('default', () => {
  const schema = v.string();

  const table = ['', null, undefined];

  test.each(table)('is valid: "%s"', (value) => {
    expect(schema.isValid(value)).toBe(true);
  });
});

describe('required method', () => {
  const schema = v.string().required();

  const table = [
    {
      title: 'is valid',
      value: 'what does the fox say',
      expected: true,
    },
    { title: 'is valid', value: 'hexlet', expected: true },
    { title: 'is not valid', value: null, expected: false },
    { title: 'is not valid', value: '', expected: false },
  ];

  test.each(table)('$title if required: "$value"', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});

const VALUE = 'what does the fox say';
describe(`"${VALUE}"`, () => {
  const schema = v.string();

  const table = [
    { title: 'contains', value: 'what', expected: true },
    { title: "doesn't contains", value: 'whatthe', expected: false },
  ];

  test.each(table)('$title "$value"', ({ value, expected }) => {
    schema.contains(value);
    expect(schema.isValid(VALUE)).toBe(expected);
  });

  test('validate with last contained result', () => {
    expect(schema.isValid(VALUE)).toBe(false);
  });
});

describe('length method', () => {
  const schema = v.string();

  test('is valid length', () => {
    schema.minLength(10).minLength(4);
    expect(schema.isValid('Hexlet')).toBe(true);
  });
});
