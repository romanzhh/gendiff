import genDiff from '../src/genDiff.js';

test('compareJSON', () => {
  expect(genDiff(
    'files/file1.json',
    'files/file2.json',
  )).toBe(
    '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
  );
});
