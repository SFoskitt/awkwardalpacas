var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
// var port = /*process.env.PORT || */ 8000; //dynamic port assignment for deployment purposes
var __
app.use(express.static(__dirname + '/..')); 
// app.use(express.static('client')); 

app.get("/", function (req, res) {
  res.sendFile('index.html', {root: __dirname + '/../client/app'});

  // res.redirect('index.html');
  // res.redirect('../client/app/index.html');
  // res.redirect('/../client/app/index.html');
  // res.render('/../client/app/index');
  // res.render('/../client/app/index.html');
  // res.render('index.html');
  // res.redirect('/client/app/index.html');
  // res.send('Hello World!');
});

require('./middleware.js')(app, express);

var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  // console.log(root.process.env.PWD)

});

