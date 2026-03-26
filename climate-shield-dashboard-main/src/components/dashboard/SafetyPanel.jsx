import React from 'react';
import { BiCheckCircle, BiDownload } from 'react-icons/bi';
import './SafetyPanel.css';

const SafetyPanel = () => {
    const steps = [
        "Move to higher ground immediately.",
        "Secure loose objects outside.",
        "Keep emergency kit ready."
    ];

    return (
        <div className="safety-panel">
            <div className="safety-header">
                <h3>What Should I Do?</h3>
                <button className="download-btn">
                    <BiDownload /> Checklist
                </button>
            </div>

            <div className="action-steps">
                {steps.map((step, idx) => (
                    <div key={idx} className="step-item">
                        <BiCheckCircle className="step-icon" size={20} />
                        <span>{step}</span>
                    </div>
                ))}
            </div>

            <div className="emergency-contacts">
                <button className="contact-btn police">Police: 100</button>
                <button className="contact-btn ambulance">Ambulance: 108</button>
            </div>
        </div>
    );
};

export default SafetyPanel;
