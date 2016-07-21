var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var router = require('./router');
var port = process.env.PORT || 3000;


// app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json());
app.use(express.static('public'));
app.use('/api', router);

app.listen(port, function() {
	console.log("Server is running at port 3000");
});