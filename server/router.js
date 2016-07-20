var express =  require('express');
var router = express.Router();
var db = require("./db")

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
	res.send(database);
});

router.delete
//POST for New URLS
router.post('/addbookmark', function(req, res) {
	req.on("data", function(data_) {
		data_ = JSON.parse(data_);
		if(database[data_.url]) {       //Check if value if exist in database
			res.send("Exist");
		}
		else {
			database[data_.url] = data_.title;
			res.send("Successful");
		}
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
