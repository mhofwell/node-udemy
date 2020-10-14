const chalk = require('chalk');
const getNotes = require('./notes.js');

const notes = getNotes();

console.log(chalk.bold.inverse.green(notes));

// const validator = require('validator');
// const getNotes = require('./notes.js');

// const notes = getNotes();

// console.log(validator.isEmail('michael.hofweller@gmail.com'));
// console.log(validator.isURL('www.google.com'));

// const add = require('./utils.js');

// console.log(add(2, 1));

//
