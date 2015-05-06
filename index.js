//First : Create a Server for out app
var express = require('express');
// Define an express app variable ...
var app = express();
// and It can require a Server
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000

//say directories of assets
app.use(express.static('./'));

// Define a route handler
app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});
 
io.on('connection', function(socket){
	console.log('a user connected');
});

// Create a HTTP server that listen on port ***

http.listen(port, function () {
	console.log('Server listening at port %d', port);
});

