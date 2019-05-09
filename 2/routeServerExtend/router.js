'use strict';
/*
 * check if handler function exists and if yes call it, else complain
 */
 module.exports = {
    route(handle, path) {
        console.log("Requesting route " + path);
        if (typeof handle[path] === 'function') {
            handle[path]();
        } else {
            console.log("Request handler not found for route " + path);
        }
    }
}
