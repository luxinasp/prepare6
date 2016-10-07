var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/api/checkyear', urlencodedParser, function (req, res) {

	var data = {"valid": '否'};
	var year = parseInt(req.body.year,10);
	
	if (!isNaN(year)) {
		data = {"valid": (year%4==0)&&(year%100!=0||year%400==0)?'是':'否'};
	}
	
	console.log(req.body);

	res.end(JSON.stringify(data));
})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
  
})