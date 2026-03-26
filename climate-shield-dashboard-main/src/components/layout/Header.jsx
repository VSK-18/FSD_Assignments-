
import React from 'react';
import { BiMap, BiBell, BiMoon, BiSun, BiSearch } from 'react-icons/bi';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="app-header">
            <div className="header-brand">
                <div className="brand-title">
                    <h1>ClimateAI</h1>
                    <span className="version-tag">BETA</span>
                </div>
                <p className="tagline">Predict early. Prepare better. Protect lives.</p>
            </div>

            <div className="header-controls">
                <div className="location-selector">
                    <BiMap className="location-icon" />
                    <span className="current-location">Maharashtra, IN</span>
                </div>

                <div className="actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
                    </button>

                    <div className="notification-wrapper">
                        <button className="alert-btn" aria-label="Notifications">
                            <BiBell size={20} />
                            <span className="badge">3</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
