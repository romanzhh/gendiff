import genDiff from '../index.js';

const output = genDiff('__fixtures__/file3.json', '__fixtures__/file4.json', 'stylish');
const output2 = genDiff('__fixtures__/file3.json', '__fixtures__/file4.json', 'json');

test('compare flat JSON with stylish format', () => {
  expect(genDiff(
    '__fixtures__/file1.json',
    '__fixtures__/file2.json',
    'stylish',
  )).toBe(
    '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
  );
});

test('compare not flat JSON with stylish format', () => {
  expect(genDiff(
    '__fixtures__/file3.json',
    '__fixtures__/file4.json',
    'stylish',
  )).toBe(output);
});

test('compare JSON with plain format', () => {
  expect(genDiff(
    '__fixtures__/file3.json',
    '__fixtures__/file4.json',
    'plain',
  )).toBe("Property 'common.follow' was added with value: false\nProperty 'common.setting2' was removed\nProperty 'common.setting3' was updated. From true to null\nProperty 'common.setting4' was added with value: 'blah blah'\nProperty 'common.setting5' was added with value: [complex value]\nProperty 'common.setting6.doge.wow' was updated. From '' to 'so much'\nProperty 'common.setting6.ops' was added with value: 'vops'\nProperty 'group1.baz' was updated. From 'bas' to 'bars'\nProperty 'group1.nest' was updated. From [complex value] to 'str'\nProperty 'group2' was removed\nProperty 'group3' was added with value: [complex value]");
});

test('compare not flat JSON with json format', () => {
  expect(genDiff(
    '__fixtures__/file3.json',
    '__fixtures__/file4.json',
    'json',
  )).toBe(output2);
});
