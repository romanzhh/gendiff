import stylish from '../src/stylish.js';

test('stylish test', () => {
  const obj = {
    abc: 12345,
    deep: {
      id: 45,
    },
  };
  expect(stylish(obj)).toBe('{\n        abc: 12345 \n        deep: {\n            id: 45\n        }\n    }');
});
