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

[文件1](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file1.json)
[文件2](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file2.json)
