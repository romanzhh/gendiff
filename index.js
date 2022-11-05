import parseData from './src/parseData.js';
import diff from './src/formatters/stylish.js';
import plainDiff from './src/formatters/plain.js';
import jsonDiff from './src/formatters/json.js';

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
