'use strict';
const http = require('http');           // http module
const url = require('url');             // provides access to url object
const path = require("path");           // object for path manipulation
const fs = require("fs");               // access to filesystem

const hostname = 'localhost';
const port = Number(process.argv[2]) || 3000;

module.exports = {
    start(route) {
        const server = http.createServer((req, res) => {
            let parsed = url.parse(req.url).pathname;
            console.log(`Request url: ${parsed}`);
            if (path.extname(parsed) === '')
                parsed = patch_filename(parsed);
            let type = path.extname(parsed).substring(1);   // drops '.'
            route(parsed, type, res);   // defer action to router
        });
        server.listen(port, hostname, () => {
            console.log(`Server started. Navigate to http://${hostname}:${port}/ to use it.`);
        });
    }
}

const directory_index = ['index.html', 'index.xhtml'];

function patch_filename(path) {
    if (path[path.length-1] != "/") {
        path += "/";
    }
    let filename = path;
    for (let i = 0; i < directory_index.length; i++) {
        filename += directory_index[i];
        fs.access("." + filename, fs.F_OK, function(err) {
            if (err) {
                console.error(err)
                filename = path;
            }
        });
        break;
    }
    if (filename === path)
        return "";
    return filename;
}
