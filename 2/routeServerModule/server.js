'use strict';
const http = require('http');           // http module
const url = require('url');             // provides access to url object

const hostname = 'localhost';
const port = Number(process.argv[2]) || 3000;

module.exports = {
    start(route) {
        const server = http.createServer((req, res) => {
            let path = url.parse(req.url).pathname;
            console.log(`Request for path: ${path}`);

            route(path);

            res.writeHead(200, {"Content-Type": "text/plain"});
            res.write("Hello World");
            res.end();
        });
        server.listen(port, hostname, () => {
            console.log(`Server has started. Navigate to http://${hostname}:${port}/ to use it.`);
        });
    }
}
