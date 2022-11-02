import parseData from './src/parseData.js';
import diff from './src/diff.js';
import plainDiff from './src/plainDiff.js';
import jsonDiff from './src/jsonDiff.js';

export default (file1, file2, format) => {
  const f1 = parseData(file1);
  const f2 = parseData(file2);
  let output;
  if (format === 'stylish') {
    output = diff(f1, f2);
  } else if (format === 'plain') {
    output = plainDiff(f1, f2);
  } else if (format === 'json') {
    output = jsonDiff(f1, f2);
  }
  return output;
};
