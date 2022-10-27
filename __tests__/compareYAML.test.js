import genDiff from '../index.js';

test('compareYAML', () => {
  expect(genDiff(
    'files/file1.yml',
    'files/file2.yml',
  ))
    .toBe(
      '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
    );
});
