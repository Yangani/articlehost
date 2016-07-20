var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '254Kenya',
  database : 'articles'
});


connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL DB: ' + err.stack);
    return;
  }
 
  console.log('Your are now connected to MySQL... ' + connection.threadId);
});

connection.end();