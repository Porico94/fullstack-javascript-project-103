#!/usr/bin/env node
/* eslint-disable no-undef */
import { Command } from "commander";
import fileReader from "../src/fileReader.js";
import buildDiff from "../src/buildDiff.js";
import formatDiff from "../src/formats/indexFormat.js";

const program = new Command();

program
  .name("gendiff")
  .description("Calculates the difference between two files and displays them")
  .version("0.1.0")
  .arguments("<filename1> <filename2>")
  .option("-f, --format <type>", "output format", "stylish")
  .action((filename1, filename2, options) => {
    const file1Object = fileReader(filename1);
    const file2Object = fileReader(filename2);

    const data = buildDiff(file1Object, file2Object);
    const format = formatDiff(data, options.format);
    console.log(format);
  })
  .parse(process.argv);
