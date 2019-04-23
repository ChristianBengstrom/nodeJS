var fs = require('fs');                 // module for reading files
let filename = process.argv[2];

new_lines = `
This data will be appended at the end of the file.`;

fs.appendFile(filename, new_lines , (err) => {
    if(err) {
        throw err;
    }
    console.log('Yes. The new_content was appended successfully and asynchronously');
});
console.log("Asynchronously?");
