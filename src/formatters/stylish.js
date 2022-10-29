import makeIndent from './makeIndent.js';

export default (file) => {
  const newFile = JSON.stringify(file, null, 4);
  const unquoted = newFile.replaceAll('"', '');
  const result = makeIndent(unquoted);
  return result.replaceAll(',', ' ');
};
