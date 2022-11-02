import stylishDiff from './diff.js';
// import { checkType } from './formatters/isString.js';

const compare = (f1, f2) => {
  const diff = stylishDiff(f1, f2);
  return JSON.stringify(diff);
};

export default compare;
