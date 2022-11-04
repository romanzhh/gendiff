import parseData from './src/parseData.js';
import diff from './src/stylishDiff.js';
import plainDiff from './src/plainDiff.js';
import jsonDiff from './src/jsonDiff.js';

export default (file1, file2, format) => {
  const f1 = parseData(file1);
  const f2 = parseData(file2);
  switch (format) {
    case 'stylish':
      return diff(f1, f2);
    case 'plain':
      return plainDiff(f1, f2);
    case 'json':
      return jsonDiff(f1, f2);
    default:
      return diff(f1, f2);
  }
};
