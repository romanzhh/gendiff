export default (f) => {
  const file = f.split('\n');
  return file.map((str) => {
    if (str !== file[0]) {
      return `    ${str}`;
    }
    return str;
  }).join('\n');
};
