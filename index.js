import _ from 'lodash';
import parseData from './src/parseData.js';
import flatOnly from './src/flatFilesDiff.js';
import flatOrNot from './src/areFilesFlat.js';

export default (file1, file2) => {
  const f1 = parseData(file1);
  const f2 = parseData(file2);
  const keys1 = _.sortBy(Object.keys(f1));
  const keys2 = _.sortBy(Object.keys(f2));
  const allKeys = _.uniq(keys1.concat(keys2));
  if (flatOrNot(f1, f2)) {
    return flatOnly(allKeys, f1, f2);
  }
  return 'function is not ready';
};
