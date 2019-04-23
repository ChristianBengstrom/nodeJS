var http = require("http");

let onRequest = function(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});  // code 200 = succes. if "text/html"
    response.write("Hello World!");                           // it's possible to write html here.
    response.end();
}

http.createServer(onRequest).listen(3000);
console.log('Go to http://localhost:3000 in your browser to see result.');
