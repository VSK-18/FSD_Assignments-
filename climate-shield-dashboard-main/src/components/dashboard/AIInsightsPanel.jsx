import React from 'react';
import { BiBot, BiBulb, BiTrendingUp, BiErrorCircle } from 'react-icons/bi';
import './AIInsightsPanel.css';

const AIInsightsPanel = () => {
    const insights = [
        {
            type: 'hazard',
            text: 'Rain expected in 3 hours — risk of flooding in low areas. Seek early preparation.',
            confidence: 'High (89%)',
            icon: <BiErrorCircle />,
            label: 'PREDICTION'
        },
        {
            type: 'advice',
            text: 'Heat stress high — avoid outdoor activity between 12 PM and 4 PM to prevent fatigue.',
            confidence: 'System Logic',
            icon: <BiBulb />,
            label: 'GUIDANCE'
        },
        {
            type: 'trend',
            text: 'Wind speeds projected to increase rapidly. Regional safety protocol activation recommended.',
            confidence: 'Medium (75%)',
            icon: <BiTrendingUp />,
            label: 'TREND ANALYSIS'
        }
    ];

    return (
        <div className="ai-insights-dashboard glass-card">
            <div className="assistant-header">
                <div className="ai-brand">
                    <div className="ai-icon-circle">
                        <BiBot />
                    </div>
                    <div className="ai-title">
                        <h3>AI Insights</h3>
                        <span className="ai-subtitle">POWERED BY CLIMATEAI ENGINE</span>
                    </div>
                </div>
                <div className="ai-status">
                    <span className="dot pulse"></span> ANALYSIS LIVE
                </div>
            </div>

            <div className="insights-vertical-list">
                {insights.map((item, index) => (
                    <div key={index} className={`insight-speech-bubble ${item.type}`}>
                        <div className="bubble-wrapper">
                            <div className="bubble-body">
                                <div className="bubble-header">
                                    <span className="category">{item.label}</span>
                                    <span className="score">{item.confidence}</span>
                                </div>
                                <p className="bubble-text">{item.text}</p>
                            </div>
                            <div className="bubble-tail"></div>
                        </div>
                        <div className="bubble-icon-area">
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIInsightsPanel;
