// @ts-check

import { describe, expect, test } from '@jest/globals';
import greet from '../index.js';

describe('greet module', () => {
  test("greet 'World' to equal 'Hello, World!'", () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
