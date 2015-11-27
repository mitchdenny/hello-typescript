'use strict';

var http = require('http');

var server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.end('<html><body><p>Hello World</p></body></html>');
});

server.listen(8080);