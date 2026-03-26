import React from 'react';
import WeatherCard from '../components/dashboard/WeatherCard';
import './LiveWeather.css';

const LiveWeather = () => {
    return (
        <div className="live-weather-page">
            <h1>Live Weather Conditions</h1>
            <p className="page-subtitle">Real-time updates from local sensors and satellite data.</p>

            <div className="weather-grid">
                <WeatherCard />
                {/* Additional detailed weather widgets would go here */}
                <div className="detail-card">
                    <h3>Air Quality</h3>
                    <div className="aqi-display">
                        <span className="aqi-value">45</span>
                        <span className="aqi-label">Good</span>
                    </div>
                </div>

                <div className="detail-card">
                    <h3>UV Index</h3>
                    <div className="uv-display">
                        <span className="uv-value">6.0</span>
                        <span className="uv-label">High</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveWeather;
