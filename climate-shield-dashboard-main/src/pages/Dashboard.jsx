import React, { useState } from 'react';
import HeroRiskOverview from '../components/dashboard/HeroRiskOverview';
import LiveWeatherStats from '../components/dashboard/LiveWeatherStats';
import AlertFeed from '../components/dashboard/AlertFeed';
import ForecastSection from '../components/dashboard/ForecastSection';
import AIInsightsPanel from '../components/dashboard/AIInsightsPanel';
import AnalyticsCharts from '../components/dashboard/AnalyticsCharts';
import DisasterMap from '../components/dashboard/DisasterMap';
import './Dashboard.css';

const Dashboard = () => {
    // Default Map View (India Center)
    const [mapView, setMapView] = useState({ center: [20.5937, 78.9629], zoom: 5 });

    const handleAlertClick = (coordinates) => {
        if (coordinates) {
            setMapView({ center: coordinates, zoom: 10 });
        }
    };

    return (
        <div className="dashboard-container">
            {/* 1. HERO SECTION */}
            <HeroRiskOverview />

            {/* 2. ACTIVE ALERTS PANEL (Above the fold) */}
            <AlertFeed onAlertClick={handleAlertClick} />

            {/* 3. LIVE WEATHER OVERVIEW CARDS */}
            <LiveWeatherStats />

            <div className="dashboard-main-grid">
                <div className="grid-left">
                    {/* 4. FORECAST SECTION */}
                    <ForecastSection />

                    {/* 5. AI INSIGHTS PANEL */}
                    <AIInsightsPanel />
                </div>

                <div className="grid-right">
                    {/* 6. DATA VISUALIZATION SECTION */}
                    <AnalyticsCharts />

                    {/* 7. OPTIONAL MAP SECTION */}
                    <DisasterMap mapCenter={mapView.center} mapZoom={mapView.zoom} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
