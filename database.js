const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'user.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');

    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
      )
    `, (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        const email = 'user@example.com';
        const password = 'password123'; 

        db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password], function (err) {
          if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
              console.log('User already exists.');
            } else {
              console.error('Error inserting user:', err.message);
            }
          } else {
            console.log(`A user has been inserted with id ${this.lastID}`);
          }
        });
      }
    });
  }
});

module.exports = db;
