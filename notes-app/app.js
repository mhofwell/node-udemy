const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const noteUtils = require('./notes.js');

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
                        noteUtils.addNotes(argv.title, argv.body);
                } catch (err) {
                        console.error(err);
                }
        },
});

// create remove command

yargs.command({
        command: 'Remove',
        describe: 'Remove a note',
        builder: {
                title: {
                        describe: 'Note title',
                        demandOption: true,
                        types: 'string',
                },
        },
        handler(argv) {
                try {
                        noteUtils.removeNotes(argv.title, argv.body);
                } catch (err) {
                        console.error(err);
                }
        },
});

yargs.parse();

// obligatory commit
