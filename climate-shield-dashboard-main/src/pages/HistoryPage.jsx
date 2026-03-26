import React from 'react';
import EmptyState from '../components/shared/EmptyState';
import { BiHistory } from 'react-icons/bi';

const HistoryPage = () => {
    return (
        <div style={{ padding: 'var(--spacing-xl)' }}>
            <EmptyState
                title="Historical Intelligence Archive"
                message="Deep-learning analysis of past meteorological cycles is currently being serialized. Access point will be available upon completion."
                icon={<BiHistory />}
            />
        </div>
    );
};

export default HistoryPage;
