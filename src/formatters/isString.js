export default (data) => {
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  if (typeof data === 'object' && data !== null) {
    return '[complex value]';
  }
  return data;
};
