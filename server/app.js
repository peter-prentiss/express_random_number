var express = require('express');
var app = express();
var random = require('./randomNumber.js');
var randomNumber = random(100, 1000000);

app.get('/randomNumber', function(req, res) {
  res.send(randomNumber.toString());
});

//server static files
var path = require('path');
app.get("/*", function(req, res) {
  console.log('got a request!');
  console.log(randomNumber);
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(5000, function() {
  console.log('listening on the port 5000');
});
