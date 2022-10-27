const deepOutput = (file) => {
  const newFile = JSON.stringify(file, null, 4);
  const unquoted = newFile.replace(/"([^"]+)":/g, '$1:');
  const split = unquoted.split('\n');
  const newSplit = split.map((str) => {
    let string = str;
    if (string !== split[0]) {
      string = `    ${string}`;
    }
    return string;
  }).join('\n');
  return newSplit.replaceAll(',', ' ');
};

export default deepOutput;
