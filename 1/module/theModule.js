'use strict';
const http = require('http');
const hostname = 'localhost';
const port = Number(process.argv[2]) || 3000;
let i = 0;

module.exports = {
    start() {
        const server = http.createServer((req, res) => {
            i ++;
            console.log(`Request ${i}`);
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.write("Hello World");
            res.end();
        });
        server.listen(port, hostname, () => {
            console.log(`Server has started. Navigate to http://${hostname}:${port}/ to use it.`);
        });
    }
}
