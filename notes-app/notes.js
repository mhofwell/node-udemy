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
        // load in the current JSON note set
        const notes = loadNotes();

        // create a new array of titles that don't match the one you want removed.

        const updatedNotes = notes.filter(note => note.title !== title);
        console.log(updatedNotes);

        // tell the user what you're doing
        console.log(chalk.redBright.inverse(`Removing ${title}`));

        // // save the new notes document
        saveNotes(updatedNotes);

        console.log(chalk.greenBright.inverse(`Success! Record removed`));

        console.log(chalk.redBright.inverse('No title found! Please try again.'));
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

// function removeNotes(title) {
//         // load in the current JSON note set
//         const notes = loadNotes();

//         // find the index of the note
//         const index = notes.map(note => note.title).indexOf(title);

//         if (index === -1) {
//                 console.log(chalk.redBright.inverse('Remove failed! No such record.'));
//                 return;
//         }
//         // remove the record from the notes array
//         const removedRecord = notes.splice(index, index + 1);

//         // tell the user what you're doing
//         console.log(chalk.redBright.inverse(`Removing ${JSON.stringify(removedRecord)}`));

//         // save the new notes document
//         saveNotes(notes);
//         console.log(chalk.greenBright.inverse(`Success! Record removed`));
// }

// obligatory commit
