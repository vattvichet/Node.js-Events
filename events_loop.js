const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

// setTimeout(() => console.log("Time 1 finished!"), 0);
// setImmediate(() => console.log("Immediate 1 finished!"));
// process.nextTick(() => console.log("From next tick"));



// fs.readFile('test-file.txt', () => {
//     console.log("I/O finished!")
// });

// console.log("From the top level code!");

const result = crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, "Password encrypted: ");

})