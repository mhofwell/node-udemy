const fs = require('fs');
const chalk = require('chalk');

// utils

function getNotes() {
        return 'SUCCESS!';
}

// add a note

function addNotes(title, body) {
        // load in the current JSON note set
        const notes = loadNotes();
        // create a duplicate array
        const duplicateNotes = notes.filter(note => note.title === title);

        // check for duplicate, if there no duplicate, push the object.
        if (duplicateNotes.length === 0) {
                notes.push({
                        title,
                        body,
                });
                saveNotes(notes);
                console.log(chalk.greenBright.inverse('Success!'));
        } else {
                console.log(chalk.redBright.inverse('Title taken! Please try another.'));
        }
}

// remove a note

function removeNotes(title) {
        const notes = loadNotes();
        const titleExists = notes.filter(note => note.title === title);

        if (!titleExists) {
                console.log(chalk.redBright.inverse('No such title exists! Try another name.'));
        } else {
                const modifiedArr = notes.filter(note => note.title !== title);
                const modifiedArrayJSON = JSON.stringify(modifiedArr);
                fs.writeFileSync('notes.json', modifiedArrayJSON);
                console.log(chalk.greenBright.inverse('Success!'));
        }
}

// list your notes

function listNotes() {
        const notes = loadNotes();
        console.log(chalk.blueBright.inverse('Your Notes:'));
        for (let i = 0; i < notes.length; i++) {
                console.log(notes[i].title);
        }
}

// read a note

function readNotes(title) {
        const notes = loadNotes();
        const noteToRead = notes.find(note => note.title === title);

        if (!noteToRead) {
                console.log(chalk.redBright.inverse('No such record!'));
        } else {
                console.log(chalk.blueBright.inverse(noteToRead.title));
                console.log(noteToRead.body);
        }
}

function loadNotes() {
        try {
                const dataBuffer = fs.readFileSync('notes.json');
                const dataJSONStr = dataBuffer.toString();
                return JSON.parse(dataJSONStr);
        } catch (err) {
                console.error(err);
                return [];
        }
}

function saveNotes(notes) {
        try {
                const noteListJSON = JSON.stringify(notes);
                fs.writeFileSync('notes.json', noteListJSON);
        } catch (err) {
                console.error(err);
        }
}
module.exports = { getNotes, addNotes, removeNotes, listNotes, readNotes };
