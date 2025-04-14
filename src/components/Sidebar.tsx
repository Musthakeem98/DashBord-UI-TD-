import React, { useState } from 'react';
import {
  Dashboard,
  Analytics,
  ShoppingCart,
  Lock,
  ExpandMore,
  ExpandLess,
  Category,
  ViewModule,
  Task,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import '../assets/styles/Sidebar.css';

const Sidebar: React.FC = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleMenuSelect = (item: string) => {
    setSelectedItem(item);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
        <MenuIcon />
      </div>

      <div className={`sidebar-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className='sidebar'>
          <div className="sidebar-title">
            <div className='dashboard-tittle'><Dashboard /> <h3>Material Dashboard PRO</h3></div>
            {isMobileMenuOpen && (
              <div className="close-button" onClick={() => setIsMobileMenuOpen(false)}>
                <CloseIcon />
              </div>
            )}
          </div>

          <hr className="sidebar-divider" />

          <div className="user-profile-row">
            <img src="https://i.pravatar.cc/100" alt="User" />
            <p>Ahamed Alice</p>
          </div>

          <hr className="sidebar-divider" />

          <ul className="sidebar-menu">
            <li
              className={`menu-clickable ${isDashboardOpen ? 'selected' : ''}`}
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            >
              <div className="menu-item">
                <span className="menu-left">
                  <Dashboard />
                  Dashboards
                </span>
                {isDashboardOpen ? <ExpandLess /> : <ExpandMore />}
              </div>
            </li>

            {isDashboardOpen && (
              <ul className="submenu">
                <li
                  className={selectedItem === 'overview' ? 'active-submenu' : ''}
                  onClick={() => handleMenuSelect('overview')}
                >
                  <span className="submenu-icon">O</span> Overview
                </li>
                <li
                  className={selectedItem === 'sales' ? 'active-submenu' : ''}
                  onClick={() => handleMenuSelect('sales')}
                >
                  <span className="submenu-icon">S</span> Sales
                </li>
              </ul>
            )}

            <div className="section-label">PAGES</div>

            <li
              className={selectedItem === 'pages' ? 'active' : ''}
              onClick={() => handleMenuSelect('pages')}
            >
              <Analytics /> Pages
            </li>
            <li
              className={selectedItem === 'analytics' ? 'active' : ''}
              onClick={() => handleMenuSelect('analytics')}
            >
              <Analytics /> Analytics
            </li>
            <li
              className={selectedItem === 'ecommerce' ? 'active' : ''}
              onClick={() => handleMenuSelect('ecommerce')}
            >
              <ShoppingCart /> Ecommerce
            </li>
            <li
              className={selectedItem === 'auth' ? 'active' : ''}
              onClick={() => handleMenuSelect('auth')}
            >
              <Lock /> Authentication
            </li>

            <hr className="sidebar-divider" />

            <div className="section-label">DOCS</div>

            <li
              className={selectedItem === 'basic' ? 'active' : ''}
              onClick={() => handleMenuSelect('basic')}
            >
              <Category /> Basic
            </li>
            <li
              className={selectedItem === 'components' ? 'active' : ''}
              onClick={() => handleMenuSelect('components')}
            >
              <ViewModule /> Components
            </li>
            <li
              className={selectedItem === 'changelog' ? 'active' : ''}
              onClick={() => handleMenuSelect('changelog')}
            >
              <Task /> Change Log
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
