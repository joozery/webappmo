import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const backendUrl = 'https://webappmo.onrender.com'; 
      const response = await fetch(`${backendUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log('Response data:', data); 

      if (response.ok) {
        setMessage(data.message);
        console.log('Login successful, navigating to dashboard...');
        navigate('/dashboard'); // นำทางไปยังหน้า Dashboard หลังจาก login สำเร็จ
      } else {
        setMessage(data.error);
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
            <p>{message}</p>
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

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* นำทางไปยังหน้า Dashboard */}
      </Routes>
    </Router>
  );
}
