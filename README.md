# gendiff

[![Actions Status](https://github.com/romanzhh/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/romanzhh/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e90dff7c66271c82394f/maintainability)](https://codeclimate.com/github/romanzhh/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e90dff7c66271c82394f/test_coverage)](https://codeclimate.com/github/romanzhh/frontend-project-46/test_coverage)

A package that compares two files.

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

That's an example of comparing flat files.

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

[file1](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file1.json)
[file2](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file2.json)

Another comparison example, but only with non-flat files.

```yaml
$ gendiff -f stylish filepath1 filepath2
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      + nest: str
      - nest: {
            key: value
        }
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```

[file1](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file3.json)
[file2](https://github.com/romanzhh/frontend-project-46/blob/main/__fixtures__/file4.json)
