var express    = require('express');
var router     = express.Router();
var connection = require('./connection');
var bookmarks  = require('./models');

//Initialize connection to MySQL DB
connection.init();

//Databases
var database = {
	"https://www.tablethotels.com" : "Tablet Hotels", 
	"https://www.google.com": "Google",
	"http://www.festus.me" : "My Portfolio",
	"https://www.twitter.com": "twitter",
	"https://www.yahoo.com": "Yahoo",
	"http://www.bloomberg.com" : "Bloomberg"
}
/*
//Add article    - addarticle  = POST
router.get('/articles', function(req, res) {
	articles.get(res);
});


// Fetch articles: GET
router.post('/addarticle', function(req, res) {

});

// Edit article: PUT
router.put('/editarticle', function(req, res) {

});

//Delete article: DELETE
router.delete('/delarticle', function(req, res) {

});

*/

//SEND URLS to the app
router.get('/bookmarks', function(req, res){
	bookmarks.get(res);
});

//POST for New URLS
router.post('/addbookmark', function(req, res) {
	req.on("data", function(data_) {
		data_ = JSON.parse(data_);
		bookmarks.add(data_, res);
     });
})

//Delete URL 
router.post('/deletebookmark', function(req, res) {
	req.on("data", function(data_) {
		data_ = JSON.parse(data_);
		delete database[data_];
      });
	res.send("Delete Successful");
})

module.exports = router;
