// @ts-check

import { describe, expect, test } from '@jest/globals';
import getWelcomePhrase from '../get-welcome-phrase.js';

describe('getWelcomePhrase module', () => {
  test("the return value to equal 'Welcome to the Mini-games!'", () => {
    expect(getWelcomePhrase()).toBe('Welcome to the Mini-games!');
  });
});
