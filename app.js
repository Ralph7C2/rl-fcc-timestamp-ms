const express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname+"/index.html");
});

app.get('/:input', function(req, res) {
	var inp = req.params.input;
	var ms = parseInt(inp);
	if(isNaN(ms)) {
		var d = new Date(inp);
		
		if(d.getTime() === null) {
			console.log("sending null from natural");
			res.send(null);
		} else {
			console.log({unix : d.getTime()/1000, natural:d.toDateString()});
			res.json({unix : d.getTime()/1000, natural:d.toDateString()});
		}
	} else {
		var d = new Date(ms*1000);
		var ret = { unix : ms, "natural" : d.toDateString() };
		res.json(ret);
	}
});

port = process.env.PORT || 4040;

app.listen(port, function() {
	console.log("Ready to rock on port: "+port);
});