import React from 'react';
import EmptyState from '../components/shared/EmptyState';
import { BiRadar } from 'react-icons/bi';

const Predictions = () => {
    return (
        <div style={{ padding: 'var(--spacing-xl)' }}>
            <EmptyState
                title="AI Predictive Engine"
                message="Neural models are currently processing real-time atmospheric data streams. Predictive insights will populate once the confidence threshold is met."
                icon={<BiRadar />}
            />
        </div>
    );
};

export default Predictions;
