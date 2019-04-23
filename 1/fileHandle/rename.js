let fs = require('fs');                     // module for reading files
let oldname = process.argv[2];
let newname = process.argv[3];

fs.rename(oldname, newname, (err) => {
    if (err) {
        throw err;
    }
    console.log('Yes! File renamed successfully and asynchronously');
});

console.log("Asynchronously?");
