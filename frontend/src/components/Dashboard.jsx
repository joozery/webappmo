import React from 'react';
import './Dashboard.css';
// นำเข้าไอคอนจาก react-icons
import { FaHistory, FaHeadphonesAlt, FaEye, FaLungs, FaFlask, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ล้างข้อมูลการเข้าสู่ระบบออก (ตัวอย่าง: ลบ token ใน localStorage)
    localStorage.removeItem('authToken'); // ลบข้อมูลการเข้าสู่ระบบ
    navigate('/'); // นำผู้ใช้กลับไปที่หน้า Login
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li><a href="#" className="active"><FaHistory /> ประวัติ</a></li>
          <li><a href="#"><FaHeadphonesAlt /> หู</a></li>
          <li><a href="#"><FaEye /> ตา</a></li>
          <li><a href="#"><FaLungs /> ปอด</a></li>
          <li><a href="#"><FaFlask /> สารเคมี</a></li>
          <li><a href="#"><FaChartBar /> สรุป</a></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}><FaSignOutAlt /> ออกจากระบบ</button>
      </aside>

      {/* Content */}
      <div className="content">
        <div className="header">
          <h1>ยินดีต้อนรับสู่ระบบ 👋</h1>
          <div className="search-bar">
            <input type="text" placeholder="ค้นหา..." />
          </div>
        </div>

        <div className="table-container">
          <h2>ข้อมูลลูกค้าทั้งหมด</h2>
          <table>
            <thead>
              <tr>
                <th>ชื่อลูกค้า</th>
                <th>บริษัท</th>
                <th>เบอร์โทร</th>
                <th>อีเมล</th>
                <th>ประเทศ</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Cooper</td>
                <td>Microsoft</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>สหรัฐอเมริกา</td>
                <td className="status-active">ใช้งานอยู่</td>
              </tr>
              <tr>
                <td>Floyd Miles</td>
                <td>Yahoo</td>
                <td>(205) 555-0100</td>
                <td>floyd@yahoo.com</td>
                <td>คิริบาส</td>
                <td className="status-inactive">ไม่ใช้งาน</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;