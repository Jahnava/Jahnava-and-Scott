var express = require('express');
var path = require('path');
var cookieParser =require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;


var server  = express();
var port = process.env.PORT || 8080;
server.use(express.static(__dirname + '/public'));
server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});
server.listen(port, function(){
  console.log('Now listening on port...', port);
});
