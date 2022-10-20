import fs from 'fs';
import yaml from 'js-yaml';

export default (file) => {
  let parse;
  const extension = file.split('.')[1];
  if (extension === 'json') {
    parse = JSON.parse;
  } else if (extension === 'yml' || extension === 'yaml') {
    parse = yaml.load;
  }
  return parse(fs.readFileSync(file));
};
