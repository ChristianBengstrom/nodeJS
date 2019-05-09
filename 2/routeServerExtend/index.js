'use strict';
var server = require("./server");                   // local module server available
var router = require("./router");                   // router module
var requestHandlers = require("./requestHandlers"); // handlers module

var handlers = {
    "/": requestHandlers.start,
    "/home": requestHandlers.start,
    "/upload": requestHandlers.upload
};

server.start(router.route,  handlers);      // use its start function
                                            // cb to route in router
