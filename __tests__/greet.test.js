// @ts-check

import { describe, expect, test } from '@jest/globals';
import greet from '../index.js';

describe('greet module', () => {
  test("greet to equal 'Welcome to the Mini-games!'", () => {
    expect(greet()).toBe('Welcome to the Mini-games!');
  });
});
