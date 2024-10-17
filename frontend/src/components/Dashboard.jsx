import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="user-info">
        <p>Username: [ชื่อผู้ใช้]</p>
        <p>โรงพยาบาล: [ชื่อโรงพยาบาล]</p>
        <p>แพทย์ที่ดูแล: [ชื่อแพทย์]</p>
      </div>

      <div className="input-form">
        <h2>กรอกข้อมูลสุขภาพ</h2>
        <form>
          {/* ตัวอย่างการกรอกข้อมูล */}
          <label>ค่า FEV1/FVC:</label>
          <input type="number" name="fev1_fvc" />
          
          <label>ค่า FVC:</label>
          <input type="number" name="fvc" />

          {/* อื่นๆ ตามข้อมูลที่ต้องการ */}
          
          <button type="submit">ส่งข้อมูล</button>
        </form>
      </div>

      <div className="summary">
        <h2>สรุปข้อมูล</h2>
        <p>ผลการวิเคราะห์: [แสดงผลที่สรุป]</p>
        <button>Export PDF</button>
        <button>Export Excel</button>
      </div>

      {/* กราฟ */}
      <div className="chart">
        <h2>กราฟแสดงผลการตรวจ</h2>
        {/* ใส่กราฟที่นี่ */}
      </div>
    </div>
  );
}

export default Dashboard;
