const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const notes = require('./notes.js');

// Customize yargs version

yargs.version('1.1.0');

// create add command

yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
                title: {
                        describe: 'Note title',
                        demandOption: true,
                        types: 'string',
                },
                body: {
                        describe: 'Note body',
                        demandOption: true,
                        types: 'string',
                },
        },
        handler(argv) {
                try {
                        notes.addNotes(argv.title, argv.body);
                } catch (err) {
                        console.error(err);
                }
        },
});

// create remove command

yargs.parse();

// obligatory commit
