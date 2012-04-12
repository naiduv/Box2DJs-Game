
var fs = require('fs');

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');


fs.writeFile("./tmp/test.txt", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
		console.log("The file was saved!");
    	}
	}); 

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
