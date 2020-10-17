const { parse } = require('yargs');
const fs = require('fs');

// read the file in to get our data
const dataBuffer = fs.readFileSync('1-json.json');

// converted the data buffer into a string with JSON format.
const dataJSON = dataBuffer.toString();

// parsed the data into an object
const data = JSON.parse(dataJSON);

// accessed the objects property
console.log(data.title);

// const book = {
//         title: 'Ego is the enemy',
//         author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);

// console.log(parsedData);
