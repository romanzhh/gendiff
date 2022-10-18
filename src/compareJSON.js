import _ from 'lodash';
import fs from 'fs';

export const genDiff = (file1, file2) => {
    const f1 = JSON.parse(fs.readFileSync(file1));
    const f2 = JSON.parse(fs.readFileSync(file2));
    const keys1 = _.sortBy(Object.keys(f1));
    const keys2 = _.sortBy(Object.keys(f2));
    const allKeys = _.uniq(keys1.concat(keys2));
    let result = '{\n';
    for (let i = 0; i < allKeys.length; i += 1) {
        if (f1[allKeys[i]] !== f2[allKeys[i]] && Object.hasOwn(f1, allKeys[i])) {
            result += `  - ${allKeys[i]}: ${f1[allKeys[i]]}\n`
        }
        if (f1[allKeys[i]] === f2[allKeys[i]]) {
            result += `    ${allKeys[i]}: ${f1[allKeys[i]]}\n`;
        }
        if (f2[allKeys[i]] !== f1[allKeys[i]] && Object.hasOwn(f2, allKeys[i])) {
            result += `  + ${allKeys[i]}: ${f2[allKeys[i]]}\n`;
        }
    }
    result += '}';
    return result;
};
