import React, { useState } from 'react';
import { BiCalendar, BiTrendingUp } from 'react-icons/bi';
import './WeatherCard.css';

const WeatherCard = () => {
    const [view, setView] = useState('24h'); // '24h' or '7day'

    const forecastData = [
        { time: '12 PM', temp: 28, rain: 10, icon: '☀️' },
        { time: '3 PM', temp: 30, rain: 0, icon: '🌤️' },
        { time: '6 PM', temp: 27, rain: 40, icon: '☁️' },
        { time: '9 PM', temp: 24, rain: 80, icon: '🌧️' },
    ];

    return (
        <div className="weather-card">
            <div className="card-header">
                <h3>Local Forecast</h3>
                <div className="toggle-group">
                    <button
                        className={view === '24h' ? 'active' : ''}
                        onClick={() => setView('24h')}
                    >
                        24h
                    </button>
                    <button
                        className={view === '7day' ? 'active' : ''}
                        onClick={() => setView('7day')}
                    >
                        7 Days
                    </button>
                </div>
            </div>

            <div className="current-weather">
                <div className="main-temp">
                    <span className="temp-value">28°</span>
                    <div className="temp-details">
                        <span className="condition">Partly Cloudy</span>
                        <span className="feels-like">Feels like 32°</span>
                    </div>
                </div>
                <div className="trend-indicator up">
                    <BiTrendingUp />
                    <span>+2° vs yesterday</span>
                </div>
            </div>

            <div className="forecast-scroll">
                {forecastData.map((item, index) => (
                    <div key={index} className="forecast-item">
                        <span className="time">{item.time}</span>
                        <span className="icon">{item.icon}</span>
                        <span className="temp">{item.temp}°</span>
                        <div className="rain-prob" style={{ opacity: item.rain > 0 ? 1 : 0.2 }}>
                            💧 {item.rain}%
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherCard;
