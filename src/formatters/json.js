import diff from '../buildDiff.js';

export default (f1, f2) => {
  const innerTree = diff(f1, f2);
  const json = (tree) => JSON.stringify(tree);
  return json(innerTree);
};
