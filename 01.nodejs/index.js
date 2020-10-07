var a = require('./handles')

var express = require('express');
var app = express();

app.use('/', a);

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

