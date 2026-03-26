import React from 'react';
import SafetyPanel from '../components/dashboard/SafetyPanel';

const SafetyPage = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Safety Guidance</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                Follow these protocols during emergencies to ensure your safety.
            </p>
            <SafetyPanel />

            <div style={{ marginTop: '2rem' }}>
                <h3>Emergency Contacts Table</h3>
                <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: 'var(--color-bg-card)', textAlign: 'left' }}>
                            <th style={{ padding: '1rem' }}>Service</th>
                            <th style={{ padding: '1rem' }}>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>Police</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>100</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>Ambulance</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>108</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>Fire</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>101</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>Disaster Mgmt</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>1078</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SafetyPage;
