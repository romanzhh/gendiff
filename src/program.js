import { Command } from 'commander';
import { genDiff } from './compareJSON.js';
import path from 'path';
export const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(path.resolve(filepath1), path.resolve(filepath2)));
  })

program.parse();


