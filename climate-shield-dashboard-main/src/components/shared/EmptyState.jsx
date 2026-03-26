import React from 'react';
import { BiErrorCircle, BiRocket } from 'react-icons/bi';
import './EmptyState.css';

const EmptyState = ({ title, message, icon }) => {
    return (
        <div className="empty-state-container glass-card">
            <div className="empty-state-content">
                <div className="empty-icon-wrapper">
                    {icon || <BiErrorCircle />}
                </div>
                <h2 className="empty-title">{title || 'Data Stream Unavailable'}</h2>
                <p className="empty-message">{message || 'We are currently synthesizing regional intelligence. Please check back shortly.'}</p>
                <button className="empty-cta-btn">
                    <BiRocket className="btn-icon" />
                    <span>Initialize Data Request</span>
                </button>
            </div>
        </div>
    );
};

export default EmptyState;
