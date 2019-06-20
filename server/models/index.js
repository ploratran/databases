var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (username, message, roomname, callback) {
      db.connection.query(`INSERT INTO messages (user, content, room) VALUES ("${username}", "${message}", "${roomname}")`, (err, result) => {
        console.log('name: ', username, message, roomname);
        console.log('Models post err', err);
        console.log('Models post result', result);
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (name, callback) {
      
      db.connection.query(`INSERT INTO users (username) VALUES ("${name}")`, (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      })
    }
  }
};

// CREATE TABLE messages (
//   /* Describe your table here.*/
//   id INT AUTO_INCREMENT,
//   user TEXT,
//   content TEXT,
//   room TEXT,
//   PRIMARY KEY (id)
// );
