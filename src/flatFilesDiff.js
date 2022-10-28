import _ from 'lodash';
import { helper } from './helper.js';
import { makeIndent } from './stylish.js';

export default (f1, f2) => `${_.sortBy(_.uniq(_.union(Object.keys(f1), Object.keys(f2)))).reduce((acc, key) => {
  let result = acc;
  if (f1[key] !== f2[key] && Object.hasOwn(f1, key) && !_.isObject(f1[key])) {
    result += `  - ${key}: ${f1[key]}\n`;
  }
  if (f1[key] !== f2[key] && Object.hasOwn(f2, key) && !_.isObject(f1[key])) {
    result += `  + ${key}: ${f2[key]}\n`;
  }
  if (f1[key] === f2[key]) {
    result += `    ${key}: ${f1[key]}\n`;
  }
  if (_.isObject(f1[key]) && Object.hasOwn(f1, key) && Object.hasOwn(f2, key)) {
    result += `        ${key}: ${makeIndent(makeIndent(helper(f1[key], f2[key])))}`;
  }
  return result;
}, '{\n')}}`;
