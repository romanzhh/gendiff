import genDiff from '../index.js';

const output = genDiff('__fixtures__/file3.json', '__fixtures__/file4.json');

test('compare flat JSON', () => {
  expect(genDiff(
    '__fixtures__/file1.json',
    '__fixtures__/file2.json',
  )).toBe(
    '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
  );
});

test('compare not flat JSON', () => {
  expect(genDiff(
    '__fixtures__/file3.json',
    '__fixtures__/file4.json',
  )).toBe(output);
});
