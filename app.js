const express = require('express');
var app = express();

app.get('/:input', function(req, res) {
	res.send(req.params.input);
});