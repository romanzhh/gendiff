export default (f) => {
  const file = f.split('\n');
  return file.map((str) => {
    let string = str;
    if (string !== file[0]) {
      string = `    ${string}`;
    }
    return string;
  }).join('\n');
};
