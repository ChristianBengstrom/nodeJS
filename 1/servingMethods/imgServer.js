'use strict';

const http = require('http');
const fs = require('fs');                                   // file system mod
const url = require('url');

const hostname = 'localhost';
const port = Number(process.argv[2]) || 3000;

const server = http.createServer((req, res) => {
    fs.readFile("files/avatar.png", (error, pgResp) => {   // read from fs
        if (error) {
            res.writeHead(404);
            res.end('404: Contents you are looking are not found');
        } else {
          res.writeHead(200, {'Content-Type': 'image/png' });       //mimetype here
          res.end(pgResp, 'binary');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Navigate to http://${hostname}:${port}/`);
});
