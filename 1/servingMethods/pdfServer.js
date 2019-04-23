'use strict';
const http = require('http');
const fs = require('fs');                                   // file system mod
const hostname = 'localhost';
const port = Number(process.argv[2]) || 3000;

const server = http.createServer((req, res) => {
    fs.readFile("../media/tips_on_giving_a_good_demo.pdf", (error, pgResp) => {   // read from fs
        if (error) {
            res.writeHead(404);
            res.end('404: Contents you are looking are Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/pdf' });
            res.end(pgResp);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Navigate to http://${hostname}:${port}/`);
});
