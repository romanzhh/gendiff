export default (data) => {
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};
