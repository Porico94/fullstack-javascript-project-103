#!/usr/bin/env node

import { Command } from 'commander';
import readFile from './fileReader.js';
import gendiff from './comparation.js';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .action((filepath1, filepath2) => {    
    const file1Data = readFile(filepath1);
    const file2Data = readFile(filepath2);
    console.log(gendiff(file1Data, file2Data));
  })
  .parse(process.argv);
