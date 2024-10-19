import React from 'react';
import './Dashboard.css'; // เพิ่มไฟล์ CSS ของคุณถ้าต้องการ

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>แดชบอร์ด</h1>
      </header>
      <nav className="dashboard-menu">
        <ul>
          <li><a href="#history">ประวัติ</a></li>
          <li><a href="#ear">หู</a></li>
          <li><a href="#eye">ตา</a></li>
          <li><a href="#lung">ปอด</a></li>
          <li><a href="#chemistry">สารเคมี</a></li>
          <li><a href="#summary">สรุป</a></li>
        </ul>
      </nav>
      <main className="dashboard-content">
        <section id="history">
          <h2>ประวัติ</h2>
          {/* เนื้อหาประวัติ */}
        </section>
        <section id="ear">
          <h2>หู</h2>
          {/* เนื้อหาหู */}
        </section>
        <section id="eye">
          <h2>ตา</h2>
          {/* เนื้อหาตา */}
        </section>
        <section id="lung">
          <h2>ปอด</h2>
          {/* เนื้อหาปอด */}
        </section>
        <section id="chemistry">
          <h2>สารเคมี</h2>
          {/* เนื้อหาสารเคมี */}
        </section>
        <section id="summary">
          <h2>สรุป</h2>
          {/* เนื้อหาสรุป */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
