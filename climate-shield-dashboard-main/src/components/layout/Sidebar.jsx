import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BiGridAlt,
  BiCloudLightning,
  BiRadar,
  BiBell,
  BiShieldQuarter,
  BiHistory,
  BiCog,
  BiLogOut,
  BiChevronLeft,
  BiChevronRight
} from 'react-icons/bi';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const menuItems = [
    { path: '/', icon: <BiGridAlt />, label: 'Dashboard' },
    { path: '/weather', icon: <BiCloudLightning />, label: 'Live Weather' },
    { path: '/predictions', icon: <BiRadar />, label: 'AI Predictions' },
    { path: '/alerts', icon: <BiBell />, label: 'Disaster Alerts' },
    { path: '/safety', icon: <BiShieldQuarter />, label: 'Safety Guidance' },
    { path: '/history', icon: <BiHistory />, label: 'Historical Data' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {/* Only show icon if we want something in the sidebar top, or nothing if logo is in header. 
              Let's keep just the icon for visual balance or as a "collapse" anchor. 
           */}
          <BiShieldQuarter size={28} />
          {!isCollapsed && <span>Menu</span>}
        </div>
        <button className="collapse-btn" onClick={toggleSidebar}>
          {isCollapsed ? <BiChevronRight size={20} /> : <BiChevronLeft size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                title={isCollapsed ? item.label : ''}
              >
                <span className="icon-wrapper">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="sidebar-divider"></div>

        <ul>
          <li>
            <NavLink to="/settings" className="nav-link" title={isCollapsed ? 'Settings' : ''}>
              <span className="icon-wrapper"><BiCog /></span>
              {!isCollapsed && <span>Settings</span>}
            </NavLink>
          </li>
          <li>
            <button className="nav-link logout-btn" title={isCollapsed ? 'Logout' : ''}>
              <span className="icon-wrapper"><BiLogOut /></span>
              {!isCollapsed && <span>Logout</span>}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
