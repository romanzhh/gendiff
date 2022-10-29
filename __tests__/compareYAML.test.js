import genDiff from '../index.js';

const output1 = genDiff('__fixtures__/file3.yml', '__fixtures__/file4.yml');
const output2 = genDiff('__fixtures__/file3.yaml', '__fixtures__/file4.yaml');

test('compare YAML', () => {
  expect(genDiff(
    '__fixtures__/file1.yml',
    '__fixtures__/file2.yml',
  ))
    .toBe(
      '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
    );
});

test('compare not flat .yaml', () => {
  expect(genDiff(
    '__fixtures__/file3.yml',
    '__fixtures__/file4.yml',
  )).toBe(output1);
});

test('compare not flat .yml', () => {
  expect(genDiff(
    '__fixtures__/file3.yaml',
    '__fixtures__/file4.yaml',
  )).toBe(output2);
});
