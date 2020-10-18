const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const getNotes = require('./notes.js');

// Customize yargs version

yargs.version('1.1.0');

// create add command

yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
                name: {
                        describe: 'Note title',
                        demandOption: true,
                        types: 'string',
                },
                planet: {
                        describe: 'Note body',
                        demandOption: true,
                        types: 'string',
                },
                age: {
                        describe: 'Note body',
                        demandOption: true,
                        types: 'integer',
                },
        },
        handler(argv, err) {
                if (err) throw err;
                const { name, planet, age } = argv;
                const newObj = { name, planet, age };
                const objJSON = JSON.stringify(newObj);
                fs.writeFileSync('people.json', objJSON);
                console.log(newObj);
                console.log(chalk.greenBright.inverse('SUCCESS!'));
        },
});

// create remove command

yargs.command({
        command: 'remove',
        describe: 'Removing a note',
        handler() {
                console.log('removing a new note!');
        },
});

// create read command

yargs.command({
        command: 'read',
        describe: 'Reading a note',
        builder: {
                filename: {
                        describe: 'File name',
                        demandOption: true,
                        types: 'string',
                },
        },
        handler(argv) {
                console.log(argv);
                const { filename } = argv;
                const sysData = fs.readFileSync(filename);
                const strJSON = sysData.toString();
                const objJSON = JSON.parse(strJSON);
                console.log(strJSON);
        },
});

// create list command

yargs.command({
        command: 'list',
        describe: 'Listing your notes',
        handler() {
                console.log('Listing your notes!');
        },
});

// add, remove, read, list options!

yargs.parse();

// obligatory commit
