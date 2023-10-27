const EventEmitter = require("events");
const http = require('http');

class Sale extends EventEmitter {
    constructor() {
        super();
    }
}


const myEmitter = new Sale();

myEmitter.on('newSale', () => {
    console.log("There is a new sale!");
});
myEmitter.on('newSale', () => {
    console.log("Customer John");
});
myEmitter.on('newSale', stockAmount => {
    console.log(`Ordered amount: ${stockAmount}`);
})

myEmitter.emit("newSale", 9);

//////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("request received!");
    res.end("request received!");
});

server.on('request', (req, res) => {
    console.log("Another request received!");

});

server.on(('close'), () => {
    console.log("Server closed!")
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for request.....");
});