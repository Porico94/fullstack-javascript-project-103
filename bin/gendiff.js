#!/usr/bin/env node

import { Command } from 'commander';
import readFile from '../src/fileReader.js';
import buildDiff from '../src/buildDiff.js';
import formatDiff from '../src/formatDiff.js'

const program = new Command();
program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .action((filepath1, filepath2, options) => {    
    //Lee los archivos
    const file1Data = readFile(filepath1);
    const file2Data = readFile(filepath2);

    //Calcula las diferencias
    const diff = buildDiff(file1Data, file2Data);

    //Formatea las diferencias según el formato especificado
    const formattedDiff = formatDiff(diff, options.format);

    //Muestra el resultado en la consola
    console.log(formattedDiff);
  })
  // eslint-disable-next-line no-undef
  .parse(process.argv);