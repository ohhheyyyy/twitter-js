var http = require('http');
var fs = require('fs');

var express = require( 'express' );

// create an instance of an express application
var app = express(); 

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});