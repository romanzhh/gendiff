import genDiff from '../index.js';

const output1 = genDiff('__fixtures__/file3.yml', '__fixtures__/file4.yml', 'stylish');
const output2 = genDiff('__fixtures__/file3.yaml', '__fixtures__/file4.yaml', 'stylish');

test('compare YAML', () => {
  expect(genDiff(
    '__fixtures__/file1.yml',
    '__fixtures__/file2.yml',
    'stylish',
  ))
    .toBe(
      '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
    );
});

test('compare not flat .yaml', () => {
  expect(genDiff(
    '__fixtures__/file3.yml',
    '__fixtures__/file4.yml',
    'stylish',
  )).toBe(output1);
});

test('compare not flat .yml', () => {
  expect(genDiff(
    '__fixtures__/file3.yaml',
    '__fixtures__/file4.yaml',
    'stylish',
  )).toBe(output2);
});
