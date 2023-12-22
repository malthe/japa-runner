import { configure, processCLIArgs, run } from '@japa/runner';
import { assert } from '@japa/assert'
import { expect } from '@japa/expect';
import { argv } from 'node:process';

processCLIArgs(argv.splice(2));

configure({
  files: ['tests/**/*.test.ts'],
  plugins: [assert(), expect()],
});

run();
