// tutorial: https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/
// USE NODEMON to auto restart on change: npm install --save-dev nodemon, then run nodemon ./start.js
// user: jim pwd: password

require('dotenv').config();                   // for using a .env file

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

const mongoose = require('mongoose');         // toolkit for using mongoDB

// Connect to DB
mongoose.connect(process.env.DATABASE)
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

require('./models/Registration');           // Schema for authers
require('./models/Book');                   // Schema for Books

// const app = require('./app');
// const server = app.listen(3000, () => {
//   console.log(`Express is running on port ${server.address().port}`);
// });

const routes = require('./routes')

routes.forEach((route, index) => {
 fastify.route(route)
})
