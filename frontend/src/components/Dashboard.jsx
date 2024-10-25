import React, { useState } from 'react';
import EarPage from './EarPage';
import EyePage from './EyePage';
import LungPage from './LungPage';
import ChemicalsPage from './ChemicalsPage';
import SummaryPage from './SummaryPage';
import './Dashboard.css';
import { FaHistory, FaHeadphonesAlt, FaEye, FaLungs, FaFlask, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('history');
  const [formData, setFormData] = useState({
    name: '', dob: '', gender: '', startDate: '', idNumber: '',
    doctorName: '', hospital: '', serviceUnit: '', address: '', phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ข้อมูลที่กรอก:', formData);
  };

  // ฟังก์ชันจัดการคลิกเมนูเพื่อเปลี่ยนหน้า
  const handleMenuClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  // ฟังก์ชันเพื่อ render หน้า content ตามสถานะ currentPage
  const renderContent = () => {
    switch (currentPage) {
      case 'ear':
        return <EarPage />;
      case 'eye':
        return <EyePage />;
      case 'lung':
        return <LungPage />;
      case 'chemicals':
        return <ChemicalsPage />;
      case 'summary':
        return <SummaryPage />;
      default:
        return (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2>ประวัติส่วนตัว</h2>
              <label>ชื่อ-นามสกุล:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="กรอกชื่อ-นามสกุล" />

              <div className="form-row">
                <div className="form-row-half">
                  <label>วัน เดือน ปีเกิด:</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </div>

                <div className="form-row-half">
                  <label>เพศ:</label>
                  <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">เลือกเพศ</option>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                  </select>
                </div>

                <div className="form-row-half">
                  <label>วันที่เข้าทำงาน:</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                </div>
              </div>

              <label>เลขบัตรประชาชน:</label>
              <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="กรอกเลขบัตรประชาชน" />

              <p>ตรวจสุขภาพ</p>
              <div className="radio-group">
                <label><input type="radio" name="healthCheck" value="first" /> ตรวจสุขภาพครั้งแรก</label>
                <label><input type="radio" name="healthCheck" value="annual" /> ตรวจประจำปี</label>
                <label><input type="radio" name="healthCheck" value="changeJob" /> ตรวจเปลี่ยนงาน</label>
                <label><input type="radio" name="healthCheck" value="history" /> ตรวจตามประวัติความจำเป็น</label>
              </div>

              <h3>แพทย์ผู้ทำการตรวจสุขภาพ</h3>
              <div className="form-row">
                <div className="form-row-half">
                  <label>ชื่อแพทย์:</label>
                  <input type="text" name="doctorName" value={formData.doctorName} onChange={handleChange} placeholder="กรอกชื่อแพทย์" />
                </div>

                <div className="form-row-half">
                  <label>โรงพยาบาล:</label>
                  <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} placeholder="กรอกชื่อโรงพยาบาล" />
                </div>
              </div>

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
        );
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li><a href="#" className={currentPage === 'history' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'history')}><FaHistory style={{ marginRight: '10px' }} /> ประวัติ</a></li>
          <li><a href="#" className={currentPage === 'ear' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'ear')}><FaHeadphonesAlt style={{ marginRight: '10px' }} /> หู</a></li>
          <li><a href="#" className={currentPage === 'eye' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'eye')}><FaEye style={{ marginRight: '10px' }} /> ตา</a></li>
          <li><a href="#" className={currentPage === 'lung' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'lung')}><FaLungs style={{ marginRight: '10px' }} /> ปอด</a></li>
          <li><a href="#" className={currentPage === 'chemicals' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'chemicals')}><FaFlask style={{ marginRight: '10px' }} /> สารเคมี</a></li>
          <li><a href="#" className={currentPage === 'summary' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'summary')}><FaChartBar style={{ marginRight: '10px' }} /> สรุป</a></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt style={{ marginRight: '10px' }} /> ออกจากระบบ
        </button>
      </aside>

      {/* Content */}
      <div className="content">
        {renderContent()} {/* เรียกฟังก์ชัน renderContent */}
      </div>
    </div>
  );
};

export default Dashboard;