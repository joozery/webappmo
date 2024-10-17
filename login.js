const db = require('./database');

function loginUser(email, password, callback) {
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;

  db.get(query, [email, password], (err, row) => {
    if (err) {
      return callback(err);
    }
    if (row) {
      return callback(null, row);
    } else {
      return callback(new Error('Invalid email or password'));
    }
  });
}

module.exports = {
  loginUser
};
