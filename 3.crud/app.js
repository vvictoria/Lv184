
var express = require('express');
var app = express();

var config = require('./config/config.js');

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('static'));

app.get('/', function (req, res) {
    res.render('index.jade', {
        title: 'CRUD :)',
        users: [
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
        ]
    });
});

app.listen(config.port, config.host, function () {
    console.log('Connection successful');
});
