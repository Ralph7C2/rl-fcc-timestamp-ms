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
			res.send(null);
		} else {
			var arr = d.toDateString().split(' ');
			arr.shift();
			var str = arr.join(' ');
			res.json({unix : d.getTime()/1000, str});
		}
	} else {
		var d = new Date(ms*1000);
		var arr = d.toDateString().split(' ');
		arr.shift();
		var str = arr.join(' ');
		var ret = { unix : ms, "natural" : str };
		res.json(ret);
	}
});

port = process.env.PORT || 4040;

app.listen(port, function() {
	console.log("Ready to rock on port: "+port);
});