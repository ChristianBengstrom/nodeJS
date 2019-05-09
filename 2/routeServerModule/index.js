'use strict';
var server = require("./server");   // local module server available
var router = require("./router");   // router module
server.start(router.route);         // use its start function

// run: node index
