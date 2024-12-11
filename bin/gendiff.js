#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .action((filepath1, filepath2, opts) => {
    console.log(`Comparing files: ${filepath1} and ${filepath2}`);
    console.log(`Selected format: ${opts.format}`);
  })
  .parse(process.argv);
