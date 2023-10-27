const fs = require('fs');
const server = require('http').createServer();

server.on("request", (req, res) => {
    //Solution 1 (takes tons of time until reading file is finished)
    fs.readFile('test-file.txt', (err, data) => {
        if (err) console.log(err);
        res.end(data);
    });
    //######################//

    //Solution 2
    const readable1 = fs.createReadStream('test-file.txt');
    readable1.on('data', chunk => {
        res.write(chunk);
    });
    readable1.on('end', () => {
        res.end();
    });
    readable1.on('error', err => {
        console.log(err);
        res.statusCode = 500;
        res.end("File not found!");
    });

    //#########################/
    //Solution 3
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // res is a writeable place for the read file source
});


server.listen(8000, '127.0.0.1', () => {
    console.log("Listening ...");
});