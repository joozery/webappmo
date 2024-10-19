import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('กรุณากรอกอีเมลและรหัสผ่าน');
      return; // หยุดการดำเนินการถ้าฟิลด์ว่าง
    }

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://webappmo.onrender.com';
      const response = await fetch(`${backendUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log('Response data:', data); // ตรวจสอบข้อมูลที่ได้รับจาก backend

      if (response.ok) {
        setMessage(data.message);
        console.log('Login successful, navigating to dashboard...');
        navigate('/dashboard'); // นำทางไปยังหน้า Dashboard หลังจาก login สำเร็จ
      } else {
        setMessage(data.error || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
        console.log('Login failed:', data.error);
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์', error);
      setMessage('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h1>ยินดีต้อนรับ</h1>
          <p>เข้าสู่ระบบด้วยบัญชีของคุณ</p>
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> จดจำฉัน
              </label>
              <a href="#">ลืมรหัสผ่าน?</a>
            </div>
            <button type="submit">เข้าสู่ระบบ</button>
            {message && <p className="error-message">{message}</p>} {/* แสดงข้อความข้อผิดพลาด */}
          </form>
        </div>
        <div className="welcome-message">
          <h2>ยินดีต้อนรับกลับมา</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your Dashboard!</p>
    </div>
  );
}

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
