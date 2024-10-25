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

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const [currentPage, setCurrentPage] = useState('history');

  const handleMenuClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

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
        return <div>กรุณาเลือกเมนูจากด้านซ้าย</div>;
    }
  };

  return (
    <div className="container">
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

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;