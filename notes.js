const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bgBlue(`Here are your notes:`));

  const list = notes.map(note => {
    console.log(chalk.blue(`${note.title}`));
  });
  return list;
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.bgGreen('New note added!'));
  } else {
    console.log(chalk.bgRed('Note title taken'));
  }
};

const readNote = title => {
  const notes = loadNotes();

  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.bgBlue(`${note.title}`));
    console.log(`${note.body}`);
  } else {
    console.log(chalk.red('No note found!'));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen('Note removed!'));
  } else {
    console.log(chalk.bgRed('No note found!'));
  }

  saveNotes(notesToKeep);
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };