'use strict';
/*
 * check if handler function exists and if yes call it, else complain
 */
const directoryIndex = {};
const requestHandlers = require("./requestHandlers");

const handlers = {
    "/": requestHandlers.start,
    "css": requestHandlers.css,
    "htm": requestHandlers.html,
    "html": requestHandlers.html,
    "xhtml": requestHandlers.html,
    "jpg": requestHandlers.jpg,
    "png": requestHandlers.png,
    "js": requestHandlers.js,
    "mov": requestHandlers.mov,
    "/notFound": requestHandlers.notFound,
    "/upload": requestHandlers.upload

};

module.exports = {
    route(path, type, resp) {
		if (typeof handlers[path] === 'function') {
            handlers[path](resp);
        } else if (typeof handlers[type] === 'function') {
	            handlers[type](resp, path);
        } else {
        	handlers['/notFound'](resp);
        }
    }
}
