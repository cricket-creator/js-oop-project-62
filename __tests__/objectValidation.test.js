import { describe, test, expect } from '@jest/globals';
import Validator from '../index.js';

const v = new Validator();

describe('shape method', () => {
  const schema = v.object().shape({
    name: v.string().required(),
    age: v.number().positive(),
  });

  const table = [
    { title: 'is valid', value: { name: 'kolya', age: 100 }, expected: true },
    {
      title: 'is not valid',
      value: { name: 'maya', age: null },
      expected: true,
    },
    { title: 'is not valid', value: { name: '', age: null }, expected: false },
    { title: 'is not valid', value: { name: 'ada', age: -5 }, expected: false },
    {
      title: 'is not valid',
      value: { name: 'elena', age: 17, sex: 'female' },
      expected: false,
    },
  ];

  test.each(table)('$title: $value', ({ value, expected }) => {
    expect(schema.isValid(value)).toBe(expected);
  });
});
