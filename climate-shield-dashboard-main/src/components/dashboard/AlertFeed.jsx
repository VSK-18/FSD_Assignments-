import React from 'react';
import { BiErrorCircle, BiTime, BiCheckShield, BiMapPin } from 'react-icons/bi';
import './AlertFeed.css';

const AlertFeed = ({ onAlertClick }) => {
    const alerts = [
        {
            id: 1,
            type: 'critical',
            title: 'Heatwave Warning – District Wide',
            severity: 'EMERGENCY',
            recommendation: 'Avoid outdoor activity between 12pm–4pm. Stay hydrated.',
            time: '10 min ago',
            location: 'Pune, Maharashtra',
            coordinates: [18.5204, 73.8567]
        },
        {
            id: 2,
            type: 'warning',
            title: 'Flood Alert – Mula-Mutha River',
            severity: 'WARNING',
            recommendation: 'Low-lying areas should prepare for potential water rise.',
            time: '1 hour ago',
            location: 'Kalyani Nagar',
            coordinates: [18.5580, 73.9130]
        },
        {
            id: 3,
            type: 'info',
            title: 'Air Quality Index Update',
            severity: 'ADVISORY',
            recommendation: 'AQI is moderate. Sensitive groups should wear masks.',
            time: '3 hours ago',
            location: 'Shivajinagar',
            coordinates: [18.5308, 73.8475]
        },
    ];

    return (
        <div className="alert-feed-container">
            <div className="panel-header">
                <div className="title-stack">
                    <span className="subtitle">ACTIVE THREAT MONITOR</span>
                    <h3>Regional Disaster Alerts</h3>
                </div>
                <div className="status-badge live">
                    <span className="dot pulse"></span> LIVE DATA
                </div>
            </div>

            <div className="alert-grid">
                {alerts.map(alert => (
                    <div
                        key={alert.id}
                        className={`alert-card glass-card ${alert.type}`}
                        onClick={() => onAlertClick && onAlertClick(alert.coordinates)}
                    >
                        <div className="alert-accent-bar"></div>
                        <div className="alert-body">
                            <div className="alert-meta">
                                <span className={`severity-tag ${alert.type}`}>
                                    {alert.type === 'critical' ? 'HIGH SEVERITY' : alert.type === 'warning' ? 'MEDIUM SEVERITY' : 'LOW SEVERITY'}
                                </span>
                                <span className="timestamp">
                                    <BiTime /> {alert.time}
                                </span>
                            </div>

                            <h4 className="alert-title">{alert.title}</h4>

                            <div className="alert-location">
                                <BiMapPin /> {alert.location}
                            </div>

                            <div className="action-box">
                                <div className="action-header">
                                    <BiCheckShield /> <span>RECOMMENDED ACTION</span>
                                </div>
                                <p className="recommendation-text">{alert.recommendation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertFeed;
