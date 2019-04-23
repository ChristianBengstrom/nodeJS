'use strict';
const http = require('http');
const fs = require('fs');                                   // file system mod
const hostname = 'localhost';
const port = Number(process.argv[2]) || 3000;

const server = http.createServer((req, res) => {
    fs.exists('../media/big_buck_bunny.mp4', function(exists) {      // check in fs
        if (!exists) {
            res.writeHead(404);
            res.end('404: Contents you are looking are Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'video/mp4' });
            var rstream = fs.createReadStream('../media/big_buck_bunny.mp4');
            rstream.pipe(res);
        }
     });
});

server.listen(port, hostname, () => {
    console.log(`Navigate to http://${hostname}:${port}/`);
});
