var http = require('http');
var fs = require('fs');
var swig = require('swig');

var express = require( 'express' );

// create an instance of an express application
var app = express(); 

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// change to true in production code
swig.setDefaults({ cache: false });

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.use('/views', function(req, res, next){
  res.render( 'index', {title: 'Hall of Fame', people: people}, function(err, html){
    res.send(html);
  });
});

swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
    console.log(output);


});

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