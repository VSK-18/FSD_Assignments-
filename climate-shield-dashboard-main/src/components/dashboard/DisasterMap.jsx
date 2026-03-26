import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BiMapAlt, BiTargetLock, BiLayer } from 'react-icons/bi';
import { useEffect } from 'react';
import './DisasterMap.css';

// Helper component to handle map re-centering via props
const MapController = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                animate: true,
                duration: 1.5
            });
        }
    }, [center, zoom, map]);
    return null;
};

const DisasterMap = ({ mapCenter, mapZoom }) => {
    // Standard coordinates for India
    const defaultPosition = [20.5937, 78.9629];

    const riskZones = [
        { id: 1, center: [19.0760, 72.8777], radius: 60000, color: '#ef4444', label: 'CRITICAL: High Flood Risk (Mumbai)' },
        { id: 2, center: [28.6139, 77.2090], radius: 50000, color: '#f59e0b', label: 'WARNING: Heat Wave (Delhi)' },
        { id: 3, center: [13.0827, 80.2707], radius: 40000, color: '#14b8a6', label: 'ADVISORY: Coastal Surge (Chennai)' }
    ];

    return (
        <section className="disaster-map-section glass-card">
            <div className="map-panel-header">
                <div className="matrix-title">
                    <BiMapAlt className="header-icon" />
                    <div className="text-group">
                        <h3>Regional Hazard Matrix</h3>
                        <span className="live-indicator"><span className="dot pulse"></span> LIVE SATELLITE FEED</span>
                    </div>
                </div>

                <div className="map-controls-premium">
                    <button className="control-btn-icon" title="Recenter"><BiTargetLock /></button>
                    <button className="control-btn-icon" title="Toggle Layers"><BiLayer /></button>
                </div>
            </div>

            <div className="map-wrapper-premium">
                <MapContainer
                    center={defaultPosition}
                    zoom={5}
                    style={{ height: '450px', width: '100%', background: '#020617' }}
                    zoomControl={false}
                >
                    {/* Controller to handle dynamic updates from Dashboard props */}
                    <MapController center={mapCenter} zoom={mapZoom} />

                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                    {riskZones.map(zone => (
                        <Circle
                            key={zone.id}
                            center={zone.center}
                            radius={zone.radius}
                            pathOptions={{
                                fillColor: zone.color,
                                color: zone.color,
                                fillOpacity: 0.3,
                                weight: 2
                            }}
                        >
                            <Popup>
                                <div className="map-popup-dark">
                                    <strong style={{ color: zone.color }}>{zone.label}</strong>
                                    <p style={{ margin: '4px 0 0', fontSize: '12px' }}>AI Confidence: 87% | Severity: High</p>
                                </div>
                            </Popup>
                        </Circle>
                    ))}
                </MapContainer>

                <div className="map-legend-premium">
                    <div className="legend-item"><span className="dot" style={{ background: '#ef4444' }}></span> <span>Critical</span></div>
                    <div className="legend-item"><span className="dot" style={{ background: '#f59e0b' }}></span> <span>Warning</span></div>
                    <div className="legend-item"><span className="dot" style={{ background: '#14b8a6' }}></span> <span>Advisory</span></div>
                </div>
            </div>
        </section>
    );
};

export default DisasterMap;
