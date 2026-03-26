import React from 'react';
import { BiErrorCircle, BiTime, BiMapPin, BiRightArrowAlt } from 'react-icons/bi';
import './DisasterAlerts.css';

const DisasterAlerts = () => {
    const alerts = [
        {
            id: 1,
            type: 'Flash Flood Warning',
            severity: 'high', // high, medium, low
            location: 'North Riverside, Mumbai',
            time: '10 mins ago',
            action: 'Evacuate to higher ground immediately.'
        },
        {
            id: 2,
            type: 'Heavy Thunderstorm',
            severity: 'medium',
            location: 'Greater Mumbai Region',
            time: '30 mins ago',
            action: 'Stay indoors and away from windows.'
        }
    ];

    return (
        <div className="disaster-alerts card">
            <div className="alerts-header">
                <h3>Active Alerts</h3>
                <span className="alert-count">{alerts.length} Active</span>
            </div>

            <div className="alerts-list">
                {alerts.map((alert) => (
                    <div key={alert.id} className={`alert-card ${alert.severity}`}>
                        <div className="alert-top">
                            <div className="alert-badge">
                                <BiErrorCircle />
                                {alert.severity === 'high' ? 'CRITICAL' : 'WARNING'}
                            </div>
                            <span className="alert-time"><BiTime /> {alert.time}</span>
                        </div>

                        <h4 className="alert-title">{alert.type}</h4>

                        <div className="alert-location">
                            <BiMapPin /> {alert.location}
                        </div>

                        <p className="alert-action">
                            <strong>Action:</strong> {alert.action}
                        </p>

                        <button className="alert-details-btn">
                            View Details <BiRightArrowAlt />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisasterAlerts;
