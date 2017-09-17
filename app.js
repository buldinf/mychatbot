var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = __dirname + '/views/';


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var apiai = require('apiai');
var token = apiai("b1034516f7e24cc1a4633a1b9e414a0b");

// view engine setup
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get('/index', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.get('/cover', function (req, res) {
	res.sendFile(bootstrap + 'index.html');
});

app.get('/chat', function (req, res) {
	res.sendFile(path + 'like_hangout_chat.html');
});

app.get('/bootstrap', function (req, res) {
	res.sendFile(path + 'bootstrap.html');
});

app.get('/jade', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/', function (req, res) {
	var sid = req.sessionID;
	var request = token.textRequest('hola', {
	    sessionId: '1'
	});
 
	request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);								
    console.log(response);
	});
 
	request.on('error', function(error) {
    console.log(error);
	});
 
	request.end();
	});

app.get('/d92_kL4', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('d92_kL4', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/e31_pUx', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('e31_pUx', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });
app.get('/rtJ_2c5', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('rtJ_2c5', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/n7H_7zA', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('n7H_7zA', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/kDi_46b', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('kDi_46b', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/ESD_90c', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('ESD_90c', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/oYs_ini', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('oYs_ini', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/nnt_666', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('nnt_666', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/gLu_LdF', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('gLu_LdF', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/px8_wm1', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('px8_wm1', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

app.get('/IBM_157', function (req, res) {
  var sid = req.sessionID;
  var request = token.textRequest('IBM_157', {
      sessionId: '1'
  });
 
  request.on('response', function(response) {
    res.send(response.result.fulfillment.speech);               
    console.log(response);
  });
 
  request.on('error', function(error) {
    console.log(error);
  });
 
  request.end();
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
