import _ from 'lodash';

const notFlatFilesDiffHelper = (f1, f2) => {
  const keys = _.sortBy(_.uniq(_.union(Object.keys(f1), Object.keys(f2))));
  return `${keys.reduce((acc, key) => {
    let result = acc;
    if (f1[key] === f2[key] && !_.isObject(f1[key] && f2[key])) {
      result += `    ${key}: ${f1[key]}\n`;
    }
    if (f1[key] !== f2[key] && Object.hasOwn(f1, key) && !_.isObject(f1[key])) {
      result += `  - ${key}: ${f1[key]}\n`;
    }
    if (f1[key] !== f2[key] && Object.hasOwn(f2, key) && !_.isObject(f2[key])) {
      result += `  + ${key}: ${f2[key]}\n`;
    }
    return result;
  }, '{\n')}}`;
};

export default notFlatFilesDiffHelper;
