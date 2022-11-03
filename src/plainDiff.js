/* eslint-disable no-param-reassign */
import _ from 'lodash';
import dataType from './formatters/isString.js';

const compare = (node1, node2) => {
  const iter = (f1, f2, path) => {
    const keys = _.sortBy(_.uniq(_.union(Object.keys(f1), Object.keys(f2))));
    const filter = keys.filter((key) => f1[key] !== f2[key]);
    return filter.map((key) => {
      const fullPath = (path === '') ? `${key}` : `${path}.${key}`;
      if (_.isObject(f2[key]) && !Object.hasOwn(f1, key)) {
        return `Property '${fullPath}' was added with value: ${dataType(f2[key])}`;
      }
      if (_.isObject(f1[key]) && !Object.hasOwn(f2, key)) {
        return `Property '${fullPath}' was removed`;
      }
      if (_.isObject(f1[key]) && !_.isObject(f2[key])) {
        return `Property '${fullPath}' was updated. From ${dataType(f1[key])} to ${dataType(f2[key])}`;
      }
      if (_.isObject(f1[key]) && _.isObject(f2[key])) {
        return `${iter(f1[key], f2[key], fullPath)}`;
      }
      if (!_.isObject(f1[key]) && !Object.hasOwn(f2, key)) {
        return `Property '${fullPath}' was removed`;
      }
      if (!_.isObject(f2[key]) && !Object.hasOwn(f1, key)) {
        return `Property '${fullPath}' was added with value: ${dataType(f2[key])}`;
      }
      if (!_.isObject(f1[key]) && f1[key] !== f2[key]
      && Object.hasOwn(f1, key) && Object.hasOwn(f2, key)) {
        return `Property '${fullPath}' was updated. From ${dataType(f1[key])} to ${dataType(f2[key])}`;
      }
      return null;
    }).join('\n');
  };
  return iter(node1, node2, '');
};

export default compare;
