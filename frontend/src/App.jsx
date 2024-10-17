import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // เขียน logic สำหรับการ login ที่นี่
    console.log('Email:', email);
    console.log('Password:', password);
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
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> จดจำฉัน
              </label>
              <a href="#">ลืมรหัสผ่าน?</a>
            </div>
            <button type="submit">เข้าสู่ระบบ</button>
            <p>
              คุณมีบัญชีแล้วหรือยัง <a href="#">สร้างบัญชี</a>
            </p>
          </form>
        </div>
        <div className="welcome-message">
          <h2>ยินดีตอนรับกลับมา</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
