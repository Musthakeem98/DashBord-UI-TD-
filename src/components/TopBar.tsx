import React from 'react';
import { Search, Notifications, Settings, Person, Home } from '@mui/icons-material';
import '../assets/styles/TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="breadcrumb-section">
        <div className="path-wrapper">
          <Home className="breadcrumb-icon" />
          <span className="breadcrumb-text">/ Dashboard / Sales</span>
        </div>
        <div className="master-topic">Sales</div>
      </div>

      <div className="right-section">
        <div className="search-bar">
          <Search />
          <input type="text" placeholder="Search here" />
        </div>
        <Person className="top-icon" />
        <Notifications className="top-icon" />
        <Settings className="top-icon" />
      </div>
    </div>
  );
};

export default TopBar;
