const express = require('express');
const path = require('path');
const { clog } = require('./middleware/helpers');
const htmlRouter = require('./routes/htmlRoute');
const apiRouter = require('./routes/apiRoute');

// Creating environment variable port
const PORT = process.env.PORT || 3001;

// Use express app
const app = express();

// Import custom middleware, 'clog'
app.use(clog);

// Express app can parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get express to create route for all the files in the 'public' folder
app.use(express.static('public'));
// Api routes
app.use('/api', apiRouter);
// Home page routes
app.use('/', htmlRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});