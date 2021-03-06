var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const {username, message, roomname} = req.body;
      // a function which handles posting a message to the database
      models.messages.post(username, message, roomname, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(data);
        }
      });
    },
    post: function (req, res) {
      // get req.body.username
      var name = req.body.username;
      // send it to the database
      models.users.post(name, (err, data) => {
        // on the success / error
        if (err) {
          res.sendStatus(500);
        } else {
          // return response
          res.sendStatus(200);
        }
      });
    }
  }
};

// module.exports = {
//   messages: {
//     get: {  
      
//     },
//     post: {

//     }
//   }, 
//   users: {
//     get: {

//     }, 
//     post: {

//     }
//   }
// };