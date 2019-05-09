'use strict';
/*
 * requestHandlers.js
 */
var querystring = require("querystring");
const fs = require('fs');

module.exports = {
    start(res, data) {
        console.log("Handler 'start' was called.");

        fs.readFile("./views/frontpage.html", (error, pgResp) => {   // read view from fs
            let test = "jekadsfas dfs";
            let linkElms = [];
            linkElms[0] = test.substring(1,3);
            // linkElms[0] = pgResp.match(/<link rel="stylesheet" href=/);

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(pgResp);
            res.end();
          });
    },

    upload(res, data) {
        console.log("Handler 'upload' was called.");
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("You've sent: " + querystring.parse(data).nml);
        res.end();
    }
}
