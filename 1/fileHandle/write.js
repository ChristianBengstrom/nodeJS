let fs = require('fs');                     // module for reading files
let filename = process.argv[2];

let content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

fs.writeFile(filename, content , (err) => {
    if (err) {
        throw err;
    }
    console.log("Yes! It's written asynchronously.");
});

console.log("Asynchronously?");
