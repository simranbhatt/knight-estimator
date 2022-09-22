#!/usr/bin/env node

import { welcome } from './src/view.js';
import { runProgram } from './src/view.js';

await welcome();
await runProgram();