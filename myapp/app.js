var express = require('express');
var app = express();
var path = __dirname + '/views/';
//app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/index', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.get('/cover', function (req, res) {
	res.sendFile(path +  'cover/index.html');
});

app.get('/cover2', function (req, res) {
	res.sendFile(__dirname + '/bootstrap-4.0.0-beta/docs/4.0/examples/dashboard/cover/index.html');
});

app.get('/jade', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});