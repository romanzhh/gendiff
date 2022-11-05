# gendiff

[![Actions Status](https://github.com/romanzhh/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/romanzhh/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e90dff7c66271c82394f/maintainability)](https://codeclimate.com/github/romanzhh/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e90dff7c66271c82394f/test_coverage)](https://codeclimate.com/github/romanzhh/frontend-project-46/test_coverage)

比較兩個配置文件並顯示差異的包。

使用其他语言阅读：[English](./README.md) | 简体中文

## 安裝

```
git clone git@github.com:romanzhh/frontend-project-46.git
make install
npm link
```

## 幫助

```js
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
```

## 例子

```yaml
$ gendiff -f stylish filepath1 filepath2
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

```js
$ gendiff -f plain filepath1 filepath2
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```

```js
$ gendiff -f json filepath1 filepath2
[{"key":"common","children":[{"key":"follow","value":false,"status":"added"},{"key":"setting1","value":"Value 1","status":"unchanged"},{"key":"setting2","value":200,"status":"deleted"},{"key":"setting3","value":true,"value2":null,"status":"changed"},{"key":"setting4","value":"blah blah","status":"added"},{"key":"setting5","value":{"key5":"value5"},"status":"added"},{"key":"setting6","children":[{"key":"doge","children":[{"key":"wow","value":"","value2":"so much","status":"changed"}],"status":"nested"},{"key":"key","value":"value","status":"unchanged"},{"key":"ops","value":"vops","status":"added"}],"status":"nested"}],"status":"nested"},{"key":"group1","children":[{"key":"baz","value":"bas","value2":"bars","status":"changed"},{"key":"foo","value":"bar","status":"unchanged"},{"key":"nest","value":{"key":"value"},"value2":"str","status":"changed"}],"status":"nested"},{"key":"group2","value":{"abc":12345,"deep":{"id":45}},"status":"deleted"},{"key":"group3","value":{"deep":{"id":{"number":45}},"fee":100500},"status":"added"}]

```

[文件1](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file1.json)
[文件2](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file2.json)
