import _ from 'lodash';
import { deepOutput, makeIndent } from './stylish.js';
import flat from './flatFilesDiff.js';

const notFlatFilesDiff = (f1, f2) => {
  const keys = _.uniq(_.sortBy(_.union(Object.keys(f1), Object.keys(f2))));
  return `${keys.reduce((acc, key) => {
    let result = acc;
    if (Object.hasOwn(f1, key) && Object.hasOwn(f2, key)) {
      result += `    ${key}: ${makeIndent(flat(f1[key], f2[key]))}\n`;
    }
    if (Object.hasOwn(f1, key) && !Object.hasOwn(f2, key)) {
      result += `  - ${key}: ${deepOutput(f1[key])}\n`;
    }
    if (Object.hasOwn(f2, key) && !Object.hasOwn(f1, key)) {
      result += `  + ${key}: ${deepOutput(f2[key])}\n`;
    }
    return result;
  }, '{\n')}}`;
};

export default notFlatFilesDiff;
