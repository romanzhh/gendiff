/* eslint-disable no-param-reassign */
import _ from 'lodash';
import stylish from './formatters/stylish.js';
import makeIndent from './formatters/makeIndent.js';

const compare = (f1, f2) => `${_.sortBy(_.uniq(_.union(Object.keys(f1), Object.keys(f2)))).reduce((acc, key) => {
  if (f1[key] !== f2[key] && Object.hasOwn(f1, key) && !_.isObject(f1[key])) {
    acc += `  - ${key}: ${f1[key]}\n`;
  }
  if (f1[key] !== f2[key] && Object.hasOwn(f2, key) && !_.isObject(f2[key])) {
    acc += `  + ${key}: ${f2[key]}\n`;
  } else if (f1[key] === f2[key] && !_.isObject(f1[key] && f2[key])) {
    acc += `    ${key}: ${f1[key]}\n`;
  }
  if (_.isObject(f2[key]) && !Object.hasOwn(f1, key)) {
    acc += `  + ${key}: ${stylish(f2[key])}\n`;
  } else if (_.isObject(f1[key]) && !Object.hasOwn(f2, key)) {
    acc += `  - ${key}: ${stylish(f1[key])}\n`;
  } else if (_.isObject(f1[key]) && !_.isObject(f2[key])) {
    acc += `  - ${key}: ${stylish(f1[key])}\n`;
  } else if (_.isObject(f1[key]) && Object.hasOwn(f2, key)) {
    acc += `    ${key}: ${makeIndent(compare(f1[key], f2[key]))}\n`;
  }
  return acc;
}, '{\n')}}`;

export default compare;
