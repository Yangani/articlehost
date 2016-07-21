var connection = require('./connection');

function Bookmarks() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from bookmarks', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.add = function(bookmark, res) {
    connection.acquire(function(err, con) {
      con.query('insert into bookmarks set ?', bookmark, function(err, result) {
        con.release();
        if (err) {
          res.send('Failed to add article');
        } else {
          res.send("Successful");
        }
      });
    });
  };

  this.update = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('update bookmarks set ? where id = ?', [todo, todo.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO update failed'});
        } else {
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from bookmarks where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}

module.exports = new Bookmarks();