import _ from 'lodash';

export default (f1, f2) => `${_.sortBy(_.uniq(_.union(Object.keys(f1), Object.keys(f2)))).reduce((acc, key) => {
  let result = acc;
  if (f1[key] !== f2[key] && Object.hasOwn(f1, key)) {
    result += `  - ${key}: ${f1[key]}\n`;
  }
  if (f1[key] !== f2[key] && Object.hasOwn(f2, key)) {
    result += `  + ${key}: ${f2[key]}\n`;
  }
  if (f1[key] === f2[key]) {
    result += `    ${key}: ${f1[key]}\n`;
  }
  return result;
}, '{\n')}}`;
