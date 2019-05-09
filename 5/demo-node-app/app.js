const express = require('express');
const path = require('path');                           // used to path.join & __dirname
const bodyParser = require('body-parser');              // form handling (get/post...)
const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));        // returns the directory in which the currently executing script resides
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('public'));                      // serve static files such as images, JavaScript files and CSS files from public directory

module.exports = app;
