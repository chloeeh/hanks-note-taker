// Import modules and data
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const notes = require('../db/db.json');

// Custom middleware that adds a note to the db
const createNote = (note) => {
    // Create a unique id for the note
    note.id = uuidv4();
    // if there's no notes create a new array of notes otherwise use the notes data
    const newNoteArr = notes || [];
    newNoteArr.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(newNoteArr), (err) => {
        if (err) throw err;
    });
    console.info('Note has been added to JSON db!');
};

// Custom middleware that deletes a note
const deleteNote = (note) => {
    // Loop through notes array
    for (let i = 0; i < notes.length; i++) {
        // When selected note matches id in array delete note
        if (notes[i].id === note.id) {
            notes.splice(i, 1);
        }
    }
};

// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
        case 'GET': {
            console.info(`GET ${fgCyan}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`POST ${fgCyan}${req.method} request to ${req.path}`);
            break;
        }
        case 'DELETE': {
            console.info(`DELETE ${fgCyan}${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`📙 ${fgCyan}${req.method} request to ${req.path}`);
    }

    next();
};
module.exports = { createNote, deleteNote, clog };