import React from 'react';
import { BiInfoCircle, BiWind, BiCloudRain } from 'react-icons/bi';
import './HeroRiskPanel.css';

const HeroRiskPanel = () => {
    const riskLevel = 'warning'; // 'safe', 'warning', 'danger'

    const getRiskDetails = (level) => {
        switch (level) {
            case 'safe':
                return { label: 'Low Risk', color: 'var(--color-alert-safe)', message: 'Conditions are stable.' };
            case 'warning':
                return { label: 'Moderate Risk', color: 'var(--color-alert-warning)', message: 'Heatwave alert in effect.' };
            case 'danger':
                return { label: 'High Risk', color: 'var(--color-alert-danger)', message: 'Flash flood warning!' };
            default:
                return { label: 'Unknown', color: 'gray', message: 'No data available.' };
        }
    };

    const { label, color, message } = getRiskDetails(riskLevel);

    return (
        <div className="hero-risk-panel animate-fade-in">
            <div className="risk-indicator" style={{ borderColor: color }}>
                <div className="risk-circle" style={{ backgroundColor: color }}>
                    <span className="risk-score">65</span>
                    <span className="risk-label">AI Score</span>
                </div>
            </div>

            <div className="risk-content">
                <h2 style={{ color }}>{label}</h2>
                <p className="risk-message">{message}</p>
                <div className="weather-quick-stats">
                    <div className="stat-item">
                        <BiWind size={20} />
                        <span>12 km/h</span>
                    </div>
                    <div className="stat-item">
                        <BiCloudRain size={20} />
                        <span>45%</span>
                    </div>
                </div>
            </div>

            <div className="ai-insight">
                <BiInfoCircle size={24} color="var(--color-secondary)" />
                <div>
                    <h4>AI Prediction</h4>
                    <p>Potential risk increase in next 6h due to rising temps.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroRiskPanel;
