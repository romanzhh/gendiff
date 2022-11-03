/* eslint-disable no-param-reassign */
import _ from 'lodash';
import dataType from './formatters/isString.js';

const compare = (node1, node2) => {
  const iter = (f1, f2) => {
    const keys = _.sortBy(_.uniq(_.union(Object.keys(f1), Object.keys(f2))));
    return keys.reduce((acc, key) => {
      if (_.isObject(f2[key]) && !Object.hasOwn(f1, key)) {
        acc += `Property '${key}' was added with value: [complex value]\n`;
      } else if (_.isObject(f1[key]) && !Object.hasOwn(f2, key)) {
        acc += `Property '${key}' was removed\n`;
      } else if (_.isObject(f1[key]) && !_.isObject(f2[key])) {
        acc += `Property '${key}' was updated. From [complex value] to ${dataType(f2[key])}`;
      } else if (_.isObject(f1[key]) && _.isObject(f2[key])) {
        acc += `${compare(f1[key], f2[key])}\n`;
      }
      if (!_.isObject(f1[key]) && !Object.hasOwn(f2, key)) {
        acc += `Property '${key}' was removed\n`;
      } else if (!_.isObject(f2[key]) && !Object.hasOwn(f1, key)) {
        acc += `Property '${key}' was added with value: ${dataType(f2[key])}\n`;
      } else if (!_.isObject(f1[key]) && f1[key] !== f2[key]
      && Object.hasOwn(f1, key) && Object.hasOwn(f2, key)) {
        acc += `Property '${key}' was updated. From ${dataType(f1[key])} to ${dataType(f2[key])}\n`;
      }
      return acc;
    }, '').trim();
  };
  return iter(node1, node2);
};

export default compare;
