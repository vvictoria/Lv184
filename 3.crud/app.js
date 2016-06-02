
var express = require('express');
var app = express();

var config = require('./config/config.js');

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('static'));

var zombielist =  [
    {
        name: 'Rodger',
        surname: 'Rodriges',
        age: 28
    },
    {
        name: 'Melanie',
        surname: 'Fergison',
        age: 18
    },
    {
        name: 'Bob',
        surname: 'DeAngelo',
        age: 41
    }
];

app.get('/', function (req, res) {
    res.render('index.jade', {
        title: 'CRUD :)',
        users: zombielist
    });
});

app.get('/create', function (req, res) {
    zombielist.push({
        name: req.query.name,
        surname: req.query.srnm,
        age: req.query.age
    });
    res.redirect('/');
});
app.get('/delete', function (req, res) {
    zombielist.splice(req.query.user,1);
    res.redirect('/');
});
app.get('/edit', function (req, res) {
    zombielist[req.query.user].name = req.query.name;
    zombielist[req.query.user].srnm = req.query.srnm;
    zombielist[req.query.user].age = req.query.age;
    res.redirect('/');
});

app.listen(config.port, config.host, function () {
    console.log('Connection successful');
});
