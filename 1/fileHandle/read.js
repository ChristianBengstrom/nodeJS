let fs = require('fs');                     // module for reading files
let filename = process.argv[2];

fs.readFile(filename, (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Asynchronously Content:\n" + data);
});
