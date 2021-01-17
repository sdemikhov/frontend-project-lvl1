#! /usr/bin/env node

import runGame from '../src/index.js';
import buildGame from '../src/games/even.js';

runGame(buildGame());
