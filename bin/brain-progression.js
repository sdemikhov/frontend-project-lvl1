#! /usr/bin/env node

import runGame from '../src/index.js';
import buildGame from '../src/games/progression.js';

runGame(buildGame());
