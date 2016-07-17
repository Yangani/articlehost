/*
CREATE TABLE articles (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(50),
  body varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO articles (id, title, body) VALUES
(1, 'Jasmine', 'Australia'),
(2, 'Jay', 'India'),
(3, 'Jim', 'Germany'),
(4, 'Lesley', 'Scotland');
*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '254Kenya',
  // database : 'my_db'
});
 
 
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL DB: ' + err.stack);
    return;
  }
 
  console.log('MySQL DB Connection Established as id ' + connection.threadId);
});

connection.end();