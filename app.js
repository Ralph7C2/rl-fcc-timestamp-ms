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
		
		if(d.time() === null) {
			console.log("sending null from natural");
			res.send(null);
		} else {
			console.log("sending from natural");
			console.log({unix : d.getTime()/1000, natural:d.toDateString()});
			res.json({unix : d.getTime()/1000, natural:d.toDateString()});
		}
	} else {
		var d = new Date(ms*1000);
		var ret = { unix : ms, "natural" : d.toDateString() };
		console.log("Sending from unix");
		console.log(typeof ms);
		console.log(ms);
		res.send(ret);
	}
});

port = process.env.PORT || 4040;

app.listen(port, function() {
	console.log("Ready to rock on port: "+port);
});