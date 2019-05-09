'use strict';
/*
 * check if handler function exists and then call it
 */
module.exports = {
    route(handle, path, resp, data) {
        console.log("Requesting route " + path);
        if (typeof handle[path] === 'function') {
            handle[path](resp, data);         // passing response object and data to handler
        } else {
            console.log("Request handler not found for route " + path);   // proper response if not found
            resp.writeHead(404, {"Content-Type": "text/html"});
            resp.write("<h1>Get your act together</h1><h2>This is a 404</h2><h3>Give me a proper URL</h3>");
            resp.end();
        }
    }
}
