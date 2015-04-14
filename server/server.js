var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = /*process.env.PORT || */ 8000; //dynamic port assignment for deployment purposes

app.use(express.static('..' + __dirname + '/public')); //serve assets with express

app.get("/", function (req, res) {
  res.redirect('index.html');
});

require('./middleware.js')(app, express);

app.listen(port);
