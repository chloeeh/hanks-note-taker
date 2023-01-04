// Import modules
const apiRouter = require('express').Router();
const data = require('../db/db.json');
const { createNote, deleteNote } = require('../middleware/helpers');

// Get all saved notes
apiRouter.get('/notes', (req, res) => {
    res.send(data);
});

// Show api endpoint
apiRouter.get('/', (req, res) => {
    res.send(`Here is the API endpoint`);
});

// POST a new note to the db
apiRouter.post('/notes', (req, res) => {
    createNote(req.body);
    res.json();
});

// Delete a note by id from the db
apiRouter.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

module.exports = apiRouter;