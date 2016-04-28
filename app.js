// REQUIREMENTS
var express = require( 'express' );
var app = express(); 
var swig = require('swig');
// change to true in production code
swig.setDefaults({ cache: false });
var router = express.Router();
var routes = require('./routes/');
var tweetBank = require('./tweetBank');



// MIDDLEWARE

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));


// ROUTES

app.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render("index", {title: "Twitter.js", tweets: tweets});
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});

// EXPORTS, IF ANY