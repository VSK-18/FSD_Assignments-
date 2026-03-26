import React from 'react';
import AlertFeed from '../components/dashboard/AlertFeed';

const AlertsPage = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Disaster Alerts</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                Real-time alerts from local and national authorities.
            </p>
            <AlertFeed />
        </div>
    );
};

export default AlertsPage;
