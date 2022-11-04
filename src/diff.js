import _ from 'lodash';
import stylish from './formatters/stylish.js';
import makeIndent from './formatters/makeIndent.js';

const getKeys = (f1, f2) => _.sortBy(_.uniq(_.union(_.keys(f1), _.keys(f2))));
const compare = (f1, f2) => {
  const keys = getKeys(f1, f2);
  return `${keys.reduce((acc, key) => {
    let result = acc;
    if ((f1[key] !== f2[key] && Object.hasOwn(f1, key)
    && (!_.isObject(f1[key]) || !_.isObject(f2[key])))) {
      result += `  - ${key}: ${stylish(f1[key])}\n`;
    }
    if (f1[key] !== f2[key] && Object.hasOwn(f2, key)
    && (!_.isObject(f1[key]) || !_.isObject(f2[key]))) {
      result += `  + ${key}: ${stylish(f2[key])}\n`;
    }
    if (f1[key] === f2[key]) {
      result += `    ${key}: ${f1[key]}\n`;
    }
    if (_.isObject(f1[key]) && _.isObject(f2[key])) {
      result += `    ${key}: ${makeIndent(compare(f1[key], f2[key]))}\n`;
    }
    return result;
  }, '{\n')}}`;
};
export default compare;
