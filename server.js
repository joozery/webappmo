require('dotenv').config();  // เพิ่มบรรทัดนี้ที่ด้านบนสุด

const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;  // ใช้ process.env.PORT ที่มาจากไฟล์ .env

app.use(bodyParser.json());

// ตั้งค่า CORS เพื่ออนุญาตให้ Frontend เชื่อมต่อได้
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://testpromomo.netlify.app',  // ใส่โดเมน frontend ของคุณ
  methods: ['GET', 'POST'],
  credentials: true
}));

// สร้างการเชื่อมต่อฐานข้อมูล SQLite
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// ตรวจสอบว่าตาราง users มีอยู่แล้วหรือไม่ ถ้าไม่มีก็สร้างขึ้นมา
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT)', (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Users table ready or already exists.');
  }
});

// API สำหรับ login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'กรุณากรอกอีเมลและรหัสผ่าน' });
  }

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'เกิดข้อผิดพลาดในระบบ' });
    }

    if (row) {
      res.status(200).json({ message: 'เข้าสู่ระบบสำเร็จ' });
    } else {
      res.status(401).json({ error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }
  });
});

// ตรวจสอบเส้นทางไม่ถูกต้อง (เพื่อช่วย debug)
app.use((req, res, next) => {
  res.status(404).json({ error: 'เส้นทางไม่ถูกต้อง' });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
