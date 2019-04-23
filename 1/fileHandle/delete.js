let fs = require('fs');                     // module for reading files
var filename = process.argv[2];

fs.unlink(filename, (err) => {
    if (err) {
        throw err;
    }
    console.log('Yes! File deleted successfully and asynchronously');
});
console.log('Asynchronously?');
