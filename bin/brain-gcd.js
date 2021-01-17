#! /usr/bin/env node

import runGame from '../src/index.js';
import buildGame from '../src/games/gcd.js';

runGame(buildGame());
