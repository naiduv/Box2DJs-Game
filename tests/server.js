
var fs = require('fs');

var http = require('http');

http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello\n');

fs.readFile('./index.html',function (err, data){
	console.log(data)
	res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
	res.write(data);
	res.end();
    });

// res.writeHead(htmldata.length, {'Content-Type': 'text/html','Content-Length':htmldata.length});
// res.write(htmldata);
// res.end();

fs.open('./tmp/test.txt', 'a', 666, function( e, id ) {
  fs.write( id, '1', null, 'utf8'); });

console.log('test')

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
