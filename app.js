var http = require('http');
var fs = require('fs');

var express = require( 'express' );

// create an instance of an express application
var app = express(); 

app.use(function (req, res, next) {
  // fs.appendFile(__dirname + '/iplog.txt', req.ip + '\n', function(err) {
  //    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  //       next();
  //   });
  //   // do your logging here
    console.log("the request url is: ", req.url);
    console.log("this is the verb: " , req.method);
    next();
   
});

app.use('/special', function (req, res, next) {
   
    res.send("You've reached a special area!");
  
    next();
   
});

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/news', function(req, res){
  res.send('Breaking news: ');
});

// app.get('/special', function(req, res){
//   res.send("You've reached a special area!");
// });

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});