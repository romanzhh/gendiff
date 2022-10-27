import parseData from './src/parseData.js';
import flatOnly from './src/flatFilesDiff.js';
import flatOrNot from './src/areFilesFlat.js';
import notFlat from './src/notFlatFilesDiff.js';

export default (file1, file2) => {
  const f1 = parseData(file1);
  const f2 = parseData(file2);
  if (flatOrNot(f1, f2)) {
    return flatOnly(f1, f2);
  }
  return notFlat(f1, f2);
};
