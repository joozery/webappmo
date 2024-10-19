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
    <div>
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
        <h1>กรอกชื่อผู้รับบริการ</h1>

        <div className="form-container">
          <h2>ประวัติส่วนตัว</h2>
          <p>ชื่อ-นามสกุล: ________________ วัน เดือน ปีเกิด: __________________ เพศ: ☐ ชาย ☐ หญิง</p>
          <p>วันที่เข้าทำงาน: _____________</p>
          <p>1. เลขบัตรประชาชน: ___________________</p>
          <p>ตรวจสุขภาพครั้งแรก ☐ ตรวจประจำปี ☐ ตรวจเปลี่ยนงาน ☐ ตรวจตามประวัติความเจ็บป่วย</p>
          <p>วัน/ที่ตรวจสุขภาพ: __________________________</p>

          <h3>แพทย์ผู้ทำการตรวจสุขภาพ</h3>
          <p>ชื่อแพทย์: _____________________ โรงพยาบาล: _____________________</p>

          <h3>ชื่อหน่วยบริการตรวจสุขภาพ</h3>
          <p>หน่วยบริการ: ____________________</p>
          <p>ที่อยู่: ____________________________</p>
          <p>เบอร์โทร: _________________________</p>

          <div className="footer">
            <button className="save-btn">บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;