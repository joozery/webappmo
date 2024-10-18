import React from 'react';
import './Dashboard.css'; // ตรวจสอบว่ามีไฟล์ CSS นี้หรือยัง

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>ประวัติ</li>
          <li>หู</li>
          <li>ตา</li>
          <li>ปอด</li>
          <li>สารเคมี</li>
          <li>สรุป</li>
        </ul>
      </div>

      {/* เนื้อหาหลัก */}
      <div className="content">
        <h1>กรอกชื่อผู้รับบริการ</h1>
        <form>
          <div className="section">
            <h2>ประวัติส่วนตัว</h2>
            <label>ชื่อ-นามสกุล:</label>
            <input type="text" name="name" />
            
            <label>วัน เดือน ปี เกิด:</label>
            <input type="text" name="dob" />
            
            <label>เพศ:</label>
            <input type="radio" name="gender" value="ชาย" /> ชาย
            <input type="radio" name="gender" value="หญิง" /> หญิง
          </div>

          <div className="section">
            <h2>การตรวจสุขภาพ</h2>
            <label>แพทย์ผู้ทำการตรวจ:</label>
            <input type="text" name="doctor_name" />
            
            <label>ชื่อหน่วยบริการ:</label>
            <input type="text" name="service_unit" />
            
            <label>วันที่ตรวจสุขภาพ:</label>
            <input type="date" name="checkup_date" />
          </div>

          <button type="submit" className="save-btn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
