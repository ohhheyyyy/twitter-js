// REQUIREMENTS
var express = require('express');
var app = express();
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

// MIDDLEWARE

app.set('views', __dirname + '/views'); // where to find views
app.set('view engine', 'html'); // what file extension do our templates have
app.engine('html', swig.renderFile); // how to render html templates
swig.setDefaults({ cache: false }); // change to true in production code

app.use(morgan('dev'));

// typical way to use express static middleware
app.use(express.static(__dirname + '/public'));

app.use('/', routes);



// ROUTES

app.get('/', function(req, res) {
    var tweets = tweetBank.list();
    res.render("index", { title: "Twitter.js", tweets: tweets });
});

// Route for single user's tweets
app.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.list();
    var list = tweetBank.find({ name: name });
    res.render("index", { title: "Twitter.js Posts by: " + name, tweets: list });
});

// Route for single tweet id
app.get('/tweets/:id', function(req, res) {
    var id = req.params.name;
    var tweets = tweetBank.list();
    var list = tweetBank.find({ name: name });
    res.render("index", { title: "Twitter.js Posts by: " + name, tweets: list });
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});

// EXPORTS, IF ANY
