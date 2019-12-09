const yargs = require('yargs'); //to get input from user

const notes = require('./notes');
const validate = require('./utils');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
// The goal is to allow users to pass in the title and body of their notes using command line options
yargs.command({//command line arguments that allow users to pass data into your application
  command: 'add', //if input ==add it will run handler
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demmandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log("hi")
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demmandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read the notes',
  builder: {
    title: {
      describe: 'Note title',
      demmandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
});

// add, remove, read, list

yargs.parse();