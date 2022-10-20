import _ from 'lodash';
import parseData from './parseData.js';

export default (file1, file2) => {
  const f1 = parseData(file1);
  const f2 = parseData(file2);
  const keys1 = _.sortBy(Object.keys(f1));
  const keys2 = _.sortBy(Object.keys(f2));
  const allKeys = _.uniq(keys1.concat(keys2));
  return `${allKeys.reduce((acc, key) => {
    let result = acc;
    if (f1[key] !== f2[key] && Object.hasOwn(f1, key)) {
      result += `  - ${key}: ${f1[key]}\n`;
    }
    if (f2[key] !== f1[key] && Object.hasOwn(f2, key)) {
      result += `  + ${key}: ${f2[key]}\n`;
    }
    if (f1[key] === f2[key]) {
      result += `    ${key}: ${f1[key]}\n`;
    }
    return result;
  }, '{\n')}}`;
};
