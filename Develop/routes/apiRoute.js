// Import modules
// create new router object to handle requests
const apiRouter = require('express').Router();
// require the db.json file for getting and sending data
const data = require('../db/db.json');
// pull createNote and deleteNote from the middleware/helpers.js file
const { createNote, deleteNote } = require('../middleware/helpers');

// Get all saved notes from the db.json file
apiRouter.get('/notes', (req, res) => {
    res.send(data);
});

// Show api endpoint
apiRouter.get('/', (req, res) => {
    res.send(`Here is the API endpoint`);
});

// POST a new note to the db.json file
apiRouter.post('/notes', (req, res) => {
    createNote(req.body);
    res.json();
});

// Delete a note by its unique id from the db.json file
apiRouter.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

// make this file a module to call elsewhere (i.e. server.js)
module.exports = apiRouter;