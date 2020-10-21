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

function removeNotes(title, body) {
        // load in the current JSON note set
        let notes = loadNotes();
        try {
                // find the index of the note
                const index = notes.indexOf(note => note.title === title);
                const record = notes[index];
                // console.log() the note to be removed
                console.log(`Removing ${chalk.redBright.inverse(record)}`);
                // splice the array at that index and only inlcude 1 array item.
                notes = notes.splice(index, 1);
                // turn the array into JSON.stringify()
                const JSONnotes = JSON.stringify(notes);
                // fs.writeFileSync(JSON string file)
                fs.writeFileSync('notes.json', JSONnotes);
        } catch (err) {
                console.log(chalk.redBright.inverse('Remove failed! No such record.'));
                return err;
        }
}

function loadNotes() {
        try {
                const dataBuffer = fs.readFileSync('notes.json');
                const dataJSONStr = dataBuffer.toString();
                return JSON.parse(dataJSONStr);
        } catch (err) {
                // console.error(err);
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
module.exports = { getNotes, addNotes, removeNotes };
