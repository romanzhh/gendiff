export const makeIndent = (f) => {
  const file = f.split('\n');
  return file.map((str) => {
    let string = str;
    if (string !== file[0]) {
      string = `    ${string}`;
    }
    return string;
  }).join('\n');
};

export const deepOutput = (file) => {
  const newFile = JSON.stringify(file, null, 4);
  const unquoted = newFile.replace(/"([^"]+)":/g, '$1:');
  const result = makeIndent(unquoted);
  return result.replaceAll(',', ' ');
};
