'use strict';
/*
 * requestHandlers.js
 */
const exec = require("child_process").exec;
const fs = require('fs');

const error404 = function(res) {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write("<h3>File or handler not found</h3>");
    res.end();
}

module.exports = {

    notFound(res) {
        console.log("Handler 'notFound' was called.");
                                    // what 'start' is supposed to deliver
        error404(res);
    },

    start(res) {
        console.log("Handler 'start' was called.");
                                    // what 'start' is supposed to deliver
        exec("ls -al", function (error, stdout, stderr) {
            if (error)
                error404(res);
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.write(stdout);
            res.end();
        });
    },

    upload(res) {
        console.log("Handler 'upload' was called.");
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello from Upload handler");
        res.end();
    },

    html(res, path) {
        console.log("Handler 'html' was called.");
        fs.readFile('.' + path, (error, pgResp) => {   // read from fs
            if (error) {
                error404(res);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
                res.end();
            }
        });
    },

    jpg(res, path) {
        console.log("Handler 'jpg' was called.");
        fs.readFile('.' + path, (error, pgResp) => {   // read from fs
            if (error) {
                error404(res);
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(pgResp);
                res.end();
            }
        });
    },

    png(res, path) {
        console.log("Handler 'png' was called.");
        fs.readFile('.' + path, (error, pgResp) => {   // read from fs
            if (error) {
                error404(res);
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(pgResp);
                res.end();
            }
        });
    },

    js(res, path) {
        console.log("Handler 'js' was called.");
        fs.readFile('.' + path, (error, pgResp) => {   // read from fs
            if (error) {
                error404(res);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/js' });
                res.write(pgResp);
                res.end();
            }
        });
    },

    css(res, path) {
        console.log("Handler 'css' was called.");
        fs.readFile('.' + path, (error, pgResp) => {   // read from fs
            if (error) {
                error404(res);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(pgResp);
                res.end();
            }
        });
    }
}
