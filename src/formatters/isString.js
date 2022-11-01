export default (data) => {
  let word = data;
  if (typeof word === 'string') {
    word = `'${data}'`;
  }
  return word;
};
