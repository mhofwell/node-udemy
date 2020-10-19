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

// create edit command

yargs.command({
        command: 'edit',
        describe: 'Editing a note',
        builder: {
                name: {
                        describe: 'Note title',
                        demandOption: false,
                        types: 'string',
                },
                planet: {
                        describe: 'Note body',
                        demandOption: false,
                        types: 'string',
                },
                age: {
                        describe: 'Note body',
                        demandOption: false,
                        types: 'integer',
                },
                filename: {
                        describe: 'File name',
                        demandOption: true,
                        types: 'string',
                },
        },
        handler(argv, err) {
                if (err) throw err;

                // get the args into their own vars
                const { name, planet, age, filename } = argv;

                // get the object of the JSON file you want to change
                const sysData = fs.readFileSync(filename);
                const strJSON = sysData.toString();
                let objJSON = JSON.parse(strJSON);

                // check if the various properties exist as input from the user, if they do, overwrite them.
                objJSON.name = name ? (objJSON.name = name) : objJSON.name;
                objJSON.planet = planet ? (objJSON.planet = planet) : objJSON.planet;
                objJSON.age = age ? (objJSON.age = age) : objJSON.age;

                // translate the object back into JSON string.
                objJSON = JSON.stringify(objJSON);
                fs.writeFileSync('people.json', objJSON);
                console.log(objJSON);
                console.log(chalk.greenBright.inverse('SUCCESS!'));
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
        handler(argv, err) {
                if (err) throw err;
                console.log(argv);
                const { filename } = argv;
                const sysData = fs.readFileSync(filename);
                const strJSON = sysData.toString();
                const objJSON = JSON.parse(strJSON);
                console.log(objJSON);
                console.log(chalk.greenBright.inverse('SUCCESS!'));
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
