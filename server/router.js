var express    = require('express');
var router     = express.Router();
var connection = require('./database/connection');
var articles   = require('./database/models');

//Initialize connection to MySQL DB
connection.init();

//Get ALL articles from the database
router.get('/allarticles', function(req, res){
	articles.get(res);
});

//POST for New articles
router.post('/addarticle', function(req, res) {
	req.on("data", function(data_) {
		data_ = JSON.parse(data_);
		articles.add(data_, res);
     });
})


//Edit an article 
router.put('/editarticle', function(req, res) {
	req.on("data", function(data_) {
		data_ = JSON.parse(data_);
		articles.delete(data_, res)
    });
})


//Delete Bookmark 
router.delete('/deletearticle', function(req, res) {
	req.on("data", function(data_) {
		data_ = JSON.parse(data_);
		articles.delete(data_, res)
    });
})


module.exports = router;
