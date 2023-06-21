// @ts-check

import { describe, expect, test } from '@jest/globals';
import welcome from '../src/welcome.js';

describe('welcome module', () => {
  test("welcome to equal 'Welcome to the Mini-games!'", () => {
    expect(welcome()).toBe('Welcome to the Mini-games!');
  });
});
