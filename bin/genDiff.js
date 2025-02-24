#!/usr/bin/env node
import * as commander from 'commander';
import genDiff from '../index.js';

const { program } = commander;

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((path1, path2) => {
    console.log(genDiff(path1, path2, program.opts().format));
  })

  .parse(process.argv);
  