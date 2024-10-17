const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

app.use(bodyParser.json());

// สร้างการเชื่อมต่อฐานข้อมูล SQLite
const db = new sqlite3.Database('./users.db');

// ตรวจสอบว่าตาราง users มีอยู่แล้วหรือยัง ถ้าไม่มีก็สร้างขึ้นมา
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT)');

// API สำหรับ login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: 'เกิดข้อผิดพลาด' });
    } else if (row) {
      res.status(200).json({ message: 'เข้าสู่ระบบสำเร็จ' });
    } else {
      res.status(401).json({ error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
