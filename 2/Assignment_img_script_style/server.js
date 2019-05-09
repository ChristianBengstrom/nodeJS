'use strict';
const http = require('http');           // http module
const url = require('url');             // provides access to url object

const hostname = 'localhost';
const port = Number(process.argv[2]) || 3000;

module.exports = {
    start(route, handlers) {
        const server = http.createServer((req, res) => {
            let pdata = '';
            let path = url.parse(req.url).pathname;
            console.log(`Request for path: ${path}`);

            req.setEncoding("utf8");
            req.addListener("data", (dataChunk) => {
                pdata += dataChunk;
                console.log(`Received POST data chunk: ${dataChunk}`);
            });
            req.addListener("end", () => {
                route(handlers, path, res, pdata);
            });
        });
        server.listen(port, hostname, () => {
            console.log(`Server has started. Navigate to http://${hostname}:${port}/ to use it.`);
        });
    }
}
