import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import LiveWeather from './pages/LiveWeather';
import Predictions from './pages/Predictions';
import AlertsPage from './pages/AlertsPage';
import SafetyPage from './pages/SafetyPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="weather" element={<LiveWeather />} />
        <Route path="predictions" element={<Predictions />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="safety" element={<SafetyPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="*" element={<div style={{ padding: '2rem' }}>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
