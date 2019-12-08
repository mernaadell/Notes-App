const chalk = require('chalk');

console.log('This is from utils.js');

const name = 'Vinícius';

const add = (a, b) => {
  return a + b;
};

const validate = url => {
  if (validator.isURL(url)) {
    console.log(chalk.bgGreen.bold('URL Success'));
  } else {
    console.log(chalk.bgRed.yellow('URL Failed'));
  }
};

module.exports = validate;