import React, { useState, useEffect } from 'react';
import { BiSearch, BiBell, BiUserCircle, BiMoon, BiSun } from 'react-icons/bi';
import './TopNav.css';

const TopNav = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        // Check system preference on load
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    return (
        <header className="top-nav">
            <div className="search-bar">
                <BiSearch className="search-icon" />
                <input type="text" placeholder="Search city, region, or alert..." />
            </div>

            <div className="nav-actions">
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
                </button>

                <div className="notification-wrapper">
                    <button className="icon-btn" aria-label="Notifications">
                        <BiBell size={20} />
                        <span className="badge">3</span>
                    </button>
                </div>

                <div className="user-profile">
                    <div className="user-info">
                        <span className="user-name">Alex M.</span>
                        <span className="user-role">Disaster Mgr.</span>
                    </div>
                    <BiUserCircle size={32} className="user-avatar" />
                </div>
            </div>
        </header>
    );
};

export default TopNav;
