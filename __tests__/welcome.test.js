// @ts-check

import { describe, expect, test } from '@jest/globals';
import getWelcomePhrase from '../src/utilities/get-welcome-phrase.js';

describe('getWelcomePhrase module', () => {
  test("getWelcomePhrase to equal 'Welcome to the Mini-games!'", () => {
    expect(getWelcomePhrase()).toBe('Welcome to the Mini-games!');
  });
});
