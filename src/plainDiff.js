import _ from 'lodash';
// import { getKey, getValue } from './formatters/getValues.js';

const compare = (f1, f2) => {
  const keys = _.sortBy(_.uniq(_.union(Object.keys(f1), Object.keys(f2))));
  return keys.reduce((acc, key) => {
    let result = acc;
    if (!_.isObject(f1[key]) && !Object.hasOwn(f2, key)) {
      result += `Property '${key}' was removed\n`;
    } else if (!_.isObject(f2[key]) && !Object.hasOwn(f1, key)) {
      result += `Property '${key}' was added with value: '${f2[key]}'\n`;
    } else if (!_.isObject(f1[key]) && f1[key] !== f2[key]
    && Object.hasOwn(f1, key) && Object.hasOwn(f2, key)) {
      result += `Property '${key}' was updated. From '${(f1[key])}' to '${f2[key]}'\n`;
    } else if (_.isObject(f2[key]) && !Object.hasOwn(f1, key)) {
      result += `Property '${key}' was added with value: [complex value]\n`;
    } else if (_.isObject(f1[key]) && !Object.hasOwn(f2, key)) {
      result += `Property '${key}' was removed\n`;
    } else if (_.isObject(f1[key]) && Object.hasOwn(f2, key)) {
      result += compare(f1[key], f2[key]);
    }
    return result;
  }, '');
};

export default compare;
