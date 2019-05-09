// tutorial: https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/
// USE NODEMON to auto restart on change: npm install --save-dev nodemon, then run nodemon ./start.js
// user: jim pwd: password

require('dotenv').config();                   // for using a .env file
const mongoose = require('mongoose');         // toolkit for using mongoDB

// mongoose setup connection
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  require('./models/Registration');            // Schema for authers
  require('./models/Book');                   // Schema for Books
  const app = require('./app');

  const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
  });
