import React from 'react';
import { BiErrorCircle, BiCloudRain, BiCheckCircle, BiInfoCircle, BiShieldQuarter } from 'react-icons/bi';
import './HeroRiskOverview.css';

const HeroRiskOverview = () => {
    // Mock data for hackathon presentation
    const riskLevel = 'ALERT'; // SAFE, ALERT, EMERGENCY
    const riskScore = 87;
    const currentTemp = 28;
    const weatherDesc = 'Heavy Rain Expected';
    const alertTitle = 'Flood Advisory: Regional Districts';

    const getStatusConfig = (level) => {
        switch (level) {
            case 'SAFE':
                return {
                    color: 'var(--color-safe)',
                    icon: <BiCheckCircle />,
                    badge: '🟢 SAFE',
                    desc: 'System Status: Optimal'
                };
            case 'ALERT':
                return {
                    color: 'var(--color-warning)',
                    icon: <BiInfoCircle />,
                    badge: '🟡 WARNING',
                    desc: 'System Status: Active Alert'
                };
            case 'EMERGENCY':
                return {
                    color: 'var(--color-danger)',
                    icon: <BiErrorCircle />,
                    badge: '🔴 EMERGENCY',
                    desc: 'System Status: Critical'
                };
            default: return {};
        }
    };

    const config = getStatusConfig(riskLevel);

    return (
        <section className="hero-risk-dashboard">
            <div className="hero-main-card glass-card" style={{ borderLeft: `6px solid ${config.color}` }}>
                <div className="hero-header">
                    <div className="brand-badge-premium">
                        <BiShieldQuarter className="brand-icon" />
                        <span className="brand-text">CLIMATEAI INTELLIGENCE</span>
                    </div>
                    <div className="live-status-pill">
                        <span className="dot pulse"></span>
                        <span className="live-text">LIVE MONITORING</span>
                    </div>
                </div>

                <div className="hero-layout">
                    <div className="hero-main-info">
                        <h1 className="hero-display-title">ClimateAI — Disaster Preparedness</h1>
                        <p className="hero-tagline">Predict Early. Prepare Better. Protect Lives.</p>

                        <div className="risk-badge-box">
                            <span className="badge-pill" style={{ background: `${config.color}20`, color: config.color }}>
                                {config.badge}
                            </span>
                            <span className="badge-subtext">{config.desc}</span>
                        </div>
                    </div>

                    <div className="hero-stats-grid">
                        <div className="stat-card">
                            <div className="stat-header">
                                <span className="stat-label">RISK CONFIDENCE</span>
                                <span className="stat-value">{riskScore}%</span>
                            </div>
                            <div className="stat-progress-bar">
                                <div className="progress-fill" style={{ width: `${riskScore}%`, background: 'var(--color-brand)' }}></div>
                            </div>
                            <p className="stat-caption">AI-Driven Predictive Accuracy</p>
                        </div>

                        <div className="stat-card secondary">
                            <span className="stat-label">PRIMARY THREAT</span>
                            <h3 className="threat-heading">{alertTitle}</h3>
                            <div className="threat-footer">
                                <BiCloudRain className="threat-icon anim-float" />
                                <span>{weatherDesc} ({currentTemp}°C)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroRiskOverview;
