#!/usr/bin/env node

import getArgument from '../src/utilities.js';
import greet from '../index.js';

console.log(greet(getArgument()));
