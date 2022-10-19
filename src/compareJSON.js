import _ from 'lodash';
import fs from 'fs';
import path from 'path';

export default (file1, file2) => {
  const f1 = JSON.parse(fs.readFileSync(path.resolve(file1)));
  const f2 = JSON.parse(fs.readFileSync(path.resolve(file2)));
  const keys1 = _.sortBy(Object.keys(f1));
  const keys2 = _.sortBy(Object.keys(f2));
  const allKeys = _.uniq(keys1.concat(keys2));
  return allKeys.reduce((acc, key) => {
      if (f1[key] !== f2[key] && Object.hasOwn(f1, key)) {
          acc += `  - ${key}: ${f1[key]}\n`;
      }
      if (f2[key] !== f1[key] && Object.hasOwn(f2, key)) {
          acc += `  + ${key}: ${f2[key]}\n`;
      }
      if (f1[key] === f2[key]) {
          acc += `    ${key}: ${f1[key]}\n`;
      }
      return acc;
  }, '{\n') + '}';
};
