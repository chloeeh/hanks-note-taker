// Import modules
// define middleware and router paths
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/helpers');
const htmlRouter = require('./routes/htmlRoute');
const apiRouter = require('./routes/apiRoute');

// Creating environment variable port
// Use either whatever is in the environment variable PORT, or 3001 if there's nothing in the variable port
const PORT = process.env.PORT || 3001;

// create an express application
const app = express();

// The app.use() function is used to mount the specified middleware function(s) 
// at the path which is being specified. It is mostly used to set up middleware for your application.
// Import custom middleware, 'clog'
app.use(clog);

// Express app can parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static is used to create route for all the files in the 'public' folder instead of having to create more paths
// and cumbersome dode
app.use(express.static('public'));
// Api routes
app.use('/api', apiRouter);
// Home page routes
app.use('/', htmlRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});