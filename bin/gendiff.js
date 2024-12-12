#!/usr/bin/env node

import { Command } from 'commander';
import readFile from './fileReader.js';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .action((filepath1, filepath2) => {
    console.log(`File 1 Path: ${filepath1}`);
    console.log(`File 2 Path: ${filepath2}`);
    const file1Data = readFile(filepath1);
    const file2Data = readFile(filepath2);
    console.log(`${JSON.stringify(file1Data, null, 2)}`);
    console.log(`${JSON.stringify(file2Data, null, 2)}`);
  })
  .parse(process.argv);
