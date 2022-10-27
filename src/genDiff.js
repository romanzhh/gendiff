import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    if (options.format === 'plain') {
      console.log('not ready!');
    } else if (options.format === 'stylish' || options.format === undefined) {
      console.log(genDiff(filepath1, filepath2));
    }
  });

program.parse();

export default program;
