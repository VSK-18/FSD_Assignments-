import React from 'react';
import { BiShieldQuarter, BiGlobe } from 'react-icons/bi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="dashboard-footer">
            <div className="footer-content">
                <div className="footer-mission">
                    <div className="mission-brand">
                        <BiShieldQuarter />
                        <span>ClimateAI Intelligence</span>
                    </div>
                </div>

                <div className="footer-sdg">
                    <BiGlobe />
                    <span>Supporting UN Sustainable Development Goal 13 – Climate Action</span>
                </div>

                <div className="footer-copy">
                    &copy; 2026 ClimateAI Dashboard. High-Fidelity Hackathon Edition.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
