import React from 'react';
import {
    LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { BiBarChartAlt2, BiPulse } from 'react-icons/bi';
import './AnalyticsCharts.css';

const data = [
    { name: 'Mon', temp: 24, rain: 20 },
    { name: 'Tue', temp: 26, rain: 10 },
    { name: 'Wed', temp: 29, rain: 5 },
    { name: 'Thu', temp: 32, rain: 0 },
    { name: 'Fri', temp: 30, rain: 40 },
    { name: 'Sat', temp: 28, rain: 60 },
    { name: 'Sun', temp: 27, rain: 30 },
];

const AnalyticsCharts = () => {
    return (
        <div className="analytics-dashboard-container">
            <div className="section-header">
                <BiBarChartAlt2 className="header-icon" />
                <div className="title-group">
                    <h3>Climate Analytics Engine</h3>
                    <span className="subtitle">Historical Trends & Predictive Modeling</span>
                </div>
            </div>

            <div className="charts-vertical-stack">
                <div className="analytics-card glass-card">
                    <div className="card-top">
                        <BiPulse className="small-icon" />
                        <h4>Temperature Variance (°C)</h4>
                    </div>
                    <div className="chart-view">
                        <ResponsiveContainer width="100%" height={220}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                <XAxis dataKey="name" fontSize={11} stroke="#64748b" axisLine={false} tickLine={false} />
                                <YAxis fontSize={11} stroke="#64748b" axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#0F172A',
                                        borderRadius: '12px',
                                        border: 'none',
                                        color: '#fff',
                                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                                        fontSize: '12px'
                                    }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="temp"
                                    stroke="var(--color-accent)"
                                    strokeWidth={4}
                                    dot={{ r: 4, fill: 'var(--color-accent)', strokeWidth: 2, stroke: '#fff' }}
                                    activeDot={{ r: 6, strokeWidth: 0 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="chart-explanation">
                        <p><strong>Analysis:</strong> Weekly fluctuations indicate a 33% increase in peak heat towards midweek, correlating with high-pressure system movement.</p>
                    </div>
                </div>

                <div className="analytics-card">
                    <div className="card-top">
                        <BiPulse className="small-icon" />
                        <h4>Precipitation Probability (%)</h4>
                    </div>
                    <div className="chart-view">
                        <ResponsiveContainer width="100%" height={220}>
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                <XAxis dataKey="name" fontSize={11} stroke="#64748b" axisLine={false} tickLine={false} />
                                <YAxis fontSize={11} stroke="#64748b" axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#0F172A',
                                        borderRadius: '12px',
                                        border: 'none',
                                        color: '#fff',
                                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                                        fontSize: '12px'
                                    }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="rain"
                                    stroke="var(--color-secondary)"
                                    fill="var(--color-secondary)"
                                    fillOpacity={0.15}
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="chart-explanation">
                        <p><strong>Analysis:</strong> Saturation risks peak during weekend cycles. Early drainage prep is advised for metropolitan sectors.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCharts;
