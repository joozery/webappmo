const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // เพิ่มการเรียกใช้ cors
const app = express();
const port = 3001;

app.use(bodyParser.json());

// ตั้งค่า CORS เพื่ออนุญาตให้ Frontend เชื่อมต่อได้
app.use(cors({
  origin: 'https://testpromomo.netlify.app', // เปลี่ยนเป็นโดเมนของ Frontend ที่คุณใช้ เช่น Netlify หรือ Localhost
  methods: ['GET', 'POST'], // กำหนดว่าอนุญาต method ใดบ้าง
  credentials: true // อนุญาตการส่งข้อมูล session หรือ cookies ข้ามโดเมน
}));

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
