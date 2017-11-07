// var http = require('http');
// var hostname = 'localhost';
// var port = 3000;

// var server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port,hostname,() => {
//     console.log('Server running at http://' +hostname+ ':' +port+ '/');
// });
var http = require('http');
var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h3>Bruka web sajt</h3>');
});

server.listen(port,hostname,() => {
    console.log('Server running at http://' +hostname+ ':' +port+ '/');
});