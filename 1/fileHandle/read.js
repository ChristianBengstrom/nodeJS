let fs = require('fs');                     // module for reading files
let filename = process.argv[2];

fs.readFile(filename, (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Content:\n--------\n" + data + "\n Yeah - Read asynchronously!");
});
console.log("Asynchronously?");
