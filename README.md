# gendiff

[![Actions Status](https://github.com/romanzhh/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/romanzhh/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e90dff7c66271c82394f/maintainability)](https://codeclimate.com/github/romanzhh/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e90dff7c66271c82394f/test_coverage)](https://codeclimate.com/github/romanzhh/frontend-project-46/test_coverage)

A package that compares two configuration files and shows a difference.

Read this in other languages: English | [简体中文](./README-CN.md)

## Installation

```
git clone git@github.com:romanzhh/frontend-project-46.git
make install
npm link
```

## Help

```js
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
```

## Examples

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

[file1](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file1.json)
[file2](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file2.json)
