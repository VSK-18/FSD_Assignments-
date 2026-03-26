import React from 'react';
import EmptyState from '../components/shared/EmptyState';
import { BiCog } from 'react-icons/bi';

const SettingsPage = () => {
    return (
        <div style={{ padding: 'var(--spacing-xl)' }}>
            <EmptyState
                title="System Configuration"
                message="Advanced console parameters are being calibrated for peak operational efficiency. Please check back for control access."
                icon={<BiCog />}
            />
        </div>
    );
};

export default SettingsPage;
