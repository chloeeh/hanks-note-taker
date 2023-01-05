// Import modules
// create new router object to handle requests
const htmlRouter = require('express').Router();
const path = require('path');

// Route function for the home page
htmlRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route function for the notes page
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Wildcard route
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// make this file a module to call elsewhere (i.e. server.js)
module.exports = htmlRouter;