import React from 'react';
import { BiWater, BiWind, BiCloudRain, BiSolidThermometer } from 'react-icons/bi';
import './LiveWeatherStats.css';

const LiveWeatherStats = () => {
    const stats = [
        { label: 'Temperature', value: '28°C', icon: <BiSolidThermometer />, color: 'var(--color-danger)' },
        { label: 'Humidity', value: '82%', icon: <BiWater />, color: 'var(--color-secondary)' },
        { label: 'Wind Speed', value: '18 km/h', icon: <BiWind />, color: 'var(--color-safe)' },
        { label: 'Rain Probability', value: '90%', icon: <BiCloudRain />, color: 'var(--color-accent)' },
    ];

    return (
        <div className="live-weather-grid">
            {stats.map((stat, index) => (
                <div className="weather-stat-card glass-card" key={index}>
                    <div className="stat-icon-wrapper" style={{ color: stat.color, background: `${stat.color}10` }}>
                        {stat.icon}
                    </div>
                    <div className="stat-details">
                        <span className="stat-label">{stat.label}</span>
                        <div className="stat-value-group">
                            <h2 className="stat-value-bold">{stat.value}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiveWeatherStats;
