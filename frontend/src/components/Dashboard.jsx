import React, { useState } from 'react';
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

  // State สำหรับเก็บค่าจากฟอร์ม
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    startDate: '',
    idNumber: '',
    doctorName: '',
    hospital: '',
    serviceUnit: '',
    address: '',
    phone: ''
  });

  // ฟังก์ชันสำหรับอัพเดตค่าเมื่อกรอกข้อมูลใน input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ฟังก์ชันเมื่อกดปุ่มบันทึก
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ข้อมูลที่กรอก:', formData);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li><a href="#" className="active"><FaHistory style={{ marginRight: '10px' }} /> ประวัติ</a></li>
          <li><a href="#"><FaHeadphonesAlt style={{ marginRight: '10px' }} /> หู</a></li>
          <li><a href="#"><FaEye style={{ marginRight: '10px' }} /> ตา</a></li>
          <li><a href="#"><FaLungs style={{ marginRight: '10px' }} /> ปอด</a></li>
          <li><a href="#"><FaFlask style={{ marginRight: '10px' }} /> สารเคมี</a></li>
          <li><a href="#"><FaChartBar style={{ marginRight: '10px' }} /> สรุป</a></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt style={{ marginRight: '10px' }} /> ออกจากระบบ
        </button>
      </aside>

      {/* Content */}
      <div className="content">
        <h2>กรอกชื่อผู้รับบริการ</h2>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>ประวัติส่วนตัว</h2>
            <label>ชื่อ-นามสกุล:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="กรอกชื่อ-นามสกุล" />

            <label>วัน เดือน ปีเกิด:</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

            <label>เพศ:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">เลือกเพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
            </select>

            <label>วันที่เข้าทำงาน:</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />

            <label>เลขบัตรประชาชน:</label>
            <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="กรอกเลขบัตรประชาชน" />

            <h3>แพทย์ผู้ทำการตรวจสุขภาพ</h3>
            <label>ชื่อแพทย์:</label>
            <input type="text" name="doctorName" value={formData.doctorName} onChange={handleChange} placeholder="กรอกชื่อแพทย์" />

            <label>โรงพยาบาล:</label>
            <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} placeholder="กรอกชื่อโรงพยาบาล" />

            <h3>ชื่อหน่วยบริการตรวจสุขภาพ</h3>
            <label>หน่วยบริการ:</label>
            <input type="text" name="serviceUnit" value={formData.serviceUnit} onChange={handleChange} placeholder="กรอกชื่อหน่วยบริการ" />

            <label>ที่อยู่:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="กรอกที่อยู่" />

            <label>เบอร์โทร:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="กรอกเบอร์โทร" />

            <div className="footer">
              <button className="save-btn" type="submit">บันทึก</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;