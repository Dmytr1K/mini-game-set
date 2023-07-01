// @ts-check

import { beforeAll, describe, expect, test } from '@jest/globals';
import getRandomInt from '../get-random-int.js';

const minInteger = 0;
const maxInteger = 100;
const repetitionCount = 5000;

const randomIntegers = [];

beforeAll(() => {
  const passRepetition = (remainingRepetitions, results) => {
    if (remainingRepetitions === 0) return;

    results.push(getRandomInt(minInteger, maxInteger));

    passRepetition(remainingRepetitions - 1, results);
  };

  passRepetition(repetitionCount, randomIntegers);
});

describe('getRandomInt module', () => {
  test('the return value must equal minInt at least once', () => {
    expect(randomIntegers).toContain(minInteger);
  });

  test('the return value must equal maxInt at least once', () => {
    expect(randomIntegers).toContain(maxInteger);
  });

  test('the return value must not be less than minInt', () => {
    expect(randomIntegers.some((integer) => integer < minInteger)).not.toBe(true);
  });

  test('the return value must not be greater than maxInt', () => {
    expect(randomIntegers.some((integer) => integer > maxInteger)).not.toBe(true);
  });
});
