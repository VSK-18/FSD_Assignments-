import React from 'react';
import { BiCloudRain, BiSun, BiCloud, BiCloudLightning, BiCalendarAlt, BiTimeFive } from 'react-icons/bi';
import './ForecastSection.css';

const ForecastSection = () => {
    // Mock Data
    const hourlyForecast = [
        { time: 'Now', temp: '28°', icon: <BiCloudRain />, chance: '90%' },
        { time: '14:00', temp: '29°', icon: <BiCloudRain />, chance: '85%' },
        { time: '15:00', temp: '28°', icon: <BiCloudLightning />, chance: '95%' },
        { time: '16:00', temp: '27°', icon: <BiCloudLightning />, chance: '90%' },
        { time: '17:00', temp: '27°', icon: <BiCloudRain />, chance: '80%' },
        { time: '18:00', temp: '26°', icon: <BiCloud />, chance: '40%' },
        { time: '19:00', temp: '25°', icon: <BiCloud />, chance: '20%' },
        { time: '20:00', temp: '24°', icon: <BiCloud />, chance: '10%' },
    ];

    const dailyForecast = [
        { day: 'Today', max: '29°', min: '24°', icon: <BiCloudRain />, condition: 'Heavy Rain' },
        { day: 'Tomorrow', max: '30°', min: '25°', icon: <BiCloudLightning />, condition: 'Thunderstorm' },
        { day: 'Wed', max: '31°', min: '25°', icon: <BiSun />, condition: 'Partly Cloudy' },
        { day: 'Thu', max: '32°', min: '26°', icon: <BiSun />, condition: 'Sunny' },
        { day: 'Fri', max: '31°', min: '25°', icon: <BiCloud />, condition: 'Cloudy' },
        { day: 'Sat', max: '30°', min: '24°', icon: <BiCloud />, condition: 'Overcast' },
        { day: 'Sun', max: '29°', min: '23°', icon: <BiCloudRain />, condition: 'Showers' },
    ];

    return (
        <div className="forecast-container">
            <div className="forecast-block">
                <div className="block-header">
                    <BiTimeFive className="header-icon" />
                    <div className="title-group">
                        <h3>Critical Hourly Trend</h3>
                        <span className="subtitle">High-resolution short-term prediction</span>
                    </div>
                </div>
                <div className="hourly-scroller">
                    {hourlyForecast.map((item, index) => (
                        <div key={index} className="hourly-card glass-card">
                            <span className="time">{item.time}</span>
                            <div className="weather-icon">{item.icon}</div>
                            <span className="temp">{item.temp}</span>
                            <div className="chance-indicator" style={{ '--chance': item.chance }}>
                                <span className="chance-text">💧{item.chance}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="forecast-block">
                <div className="block-header">
                    <BiCalendarAlt className="header-icon" />
                    <div className="title-group">
                        <h3>7-Day Climate Outlook</h3>
                        <span className="subtitle">Extended preparation window</span>
                    </div>
                </div>
                <div className="daily-list">
                    {dailyForecast.map((item, index) => (
                        <div key={index} className="daily-row glass-card">
                            <span className="day-name">{item.day}</span>
                            <div className="weather-status">
                                <span className="status-icon">{item.icon}</span>
                                <span className="status-label">{item.condition}</span>
                            </div>
                            <div className="temp-split">
                                <span className="high">{item.max}</span>
                                <div className="temp-bar-bg">
                                    <div className="temp-bar-fill"></div>
                                </div>
                                <span className="low">{item.min}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForecastSection;
