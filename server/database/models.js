var connection = require('./connection');

function Articles() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from articles', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.add = function(article, res) {
    connection.acquire(function(err, con) {
      con.query('insert into articles set ?', article, function(err, result) {
        con.release();
        if (err) {
          res.send('Failed to add article');
        } else {
          res.send("Successful");
        }
      });
    });
  };

  this.update = function(article, res) {
    connection.acquire(function(err, con) {
      con.query('update articles set ? where title = ?', [article, article.title], function(err, result) {
        con.release();
        if (err) {
          res.send('Failed to update');
        } else {
          res.send('Updated successfully');
        }
      });
    });
  };

  this.delete = function(title, res) {
    connection.acquire(function(err, con) {
      con.query('delete from articles where title = ?', [title], function(err, result) {
        con.release();
        if (err) {
          res.send('Failed to delete');
        } else {
          res.send('Deleted successfully');
        }
      });
    });
  };
}

module.exports = new Articles();