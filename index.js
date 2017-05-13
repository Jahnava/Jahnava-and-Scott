var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
server.use(express.static(__dirname + '/public'));


server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.get('/index1', function(req, res){
  res.sendFile('index1.html', {root: __dirname + '/public/html'});
});

server.get('/details', function(req, res){
  res.sendFile('details.html', {root: __dirname + '/public/html'});
});



server.listen(port, function(){
  console.log('Now listening on port...', port);
});
