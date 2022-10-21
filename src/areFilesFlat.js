export default (file1, file2) => {
    const f1 = JSON.stringify(file1).split('');
    const f2 = JSON.stringify(file2).split('');
    const count1 = f1.filter((char) => char === '}');
    const count2 = f2.filter((char) => char === '}');
    if (count1.length === 1 && count2.length === 1) {
        return true;
    }
    return false;
};
