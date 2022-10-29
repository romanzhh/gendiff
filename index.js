import parseData from './src/parseData.js';
import flat from './src/diff.js';

export default (file1, file2, format) => {
  const f1 = parseData(file1);
  const f2 = parseData(file2);
  let output;
  if (format === 'stylish') {
    output = flat(f1, f2);
  } else if (format === 'plain') {
    output = 0;
  }
  return output;
};
