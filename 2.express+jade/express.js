var express = require('express');
var app = express();
// var app = require('express')();

var config = require('./config/config.js');

app.set('views', './views');
// app.set('view engine', 'jade');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('main', { title: 'Main page', message: 'Hello there!'});
});

app.get('/about', function (req, res) {
  res.render('main', { title: 'About us', message: 'We are developers.'});
});

app.get('/contact', function (req, res) {
  res.render('main', { title: 'Contact', message: 'Our phone is 555-1234'});
});



app.listen(config.port, config.address, function () {
  console.log('Example app listening on port ' + config.port + '!');
});


// app.listen(port, onFinishedCallback);
// app.listen(port, host, onFinishedCallback);
