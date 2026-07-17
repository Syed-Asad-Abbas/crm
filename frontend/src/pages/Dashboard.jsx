import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LayoutDashboard, Check, Settings, Download, ChevronDown, ChevronLeft, ChevronRight, MoreVertical, Search, Globe } from 'lucide-react';
import './Dashboard.css';

const revenueData = [
  { name: 'Mar', val1: 22, val2: 23 },
  { name: 'Apr', val1: 15, val2: 16 },
  { name: 'May', val1: 19, val2: 20 },
  { name: 'Jun', val1: 12, val2: 13 },
  { name: 'Jul', val1: 19, val2: 20 },
  { name: 'Aug', val1: 5, val2: 6 },
  { name: 'Sept', val1: 19, val2: 20 },
  { name: 'Oct', val1: 15, val2: 16 },
  { name: 'Nov', val1: 20, val2: 21 },
  { name: 'Des', val1: 8, val2: 9 },
  { name: 'Jan', val1: 5, val2: 6 },
  { name: 'Feb', val1: 7, val2: 8 },
];

const retentionData = [
  { name: 'Jun', s1: 20, s2: 30, s3: 40 },
  { name: 'Jul', s1: 30, s2: 40, s3: 20 },
  { name: 'Aug', s1: 40, s2: 20, s3: 30 },
  { name: 'Sep', s1: 50, s2: 30, s3: 50 },
  { name: 'Oct', s1: 0, s2: 0, s3: 0 },
  { name: 'Nov', s1: 0, s2: 0, s3: 0 },
  { name: 'Dec', s1: 0, s2: 0, s3: 0 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dash-header">
        <div className="dash-header-left">
          <div className="dash-title">
            <LayoutDashboard size={20} /> Dashboard
          </div>
          <div className="last-updated">
            <Check size={16} /> Last updated now
          </div>
        </div>
        <div className="dash-header-actions">
          <button className="dash-btn-outline"><Settings size={16} /> Customize Widget</button>
          <button className="dash-btn-outline"><Download size={16} /> Imports <ChevronDown size={14} /></button>
          <button className="dash-btn-primary"><Download size={16} /> Exports <ChevronDown size={14} /></button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-title">
              <div className="metric-icon"><LayoutDashboard size={14} /></div> Leads
            </div>
            <div className="metric-info-icon">ℹ</div>
          </div>
          <div className="metric-body">
            <div className="metric-value">129</div>
            <div className="metric-trend up">↑2%</div>
          </div>
          <div className="metric-footer">vs last week</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-title">
              <div className="metric-icon"><LayoutDashboard size={14} /></div> CLV
            </div>
            <div className="metric-info-icon">ℹ</div>
          </div>
          <div className="metric-body">
            <div className="metric-value">14d</div>
            <div className="metric-trend down">↓4%</div>
          </div>
          <div className="metric-footer">vs last week</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-title">
              <div className="metric-icon">$</div> Conversion Rate
            </div>
            <div className="metric-info-icon">ℹ</div>
          </div>
          <div className="metric-body">
            <div className="metric-value">24%</div>
            <div className="metric-trend up">↑2%</div>
          </div>
          <div className="metric-footer">vs last week</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-title">
              <div className="metric-icon">💳</div> Revenue
            </div>
            <div className="metric-info-icon">ℹ</div>
          </div>
          <div className="metric-body">
            <div className="metric-value">$1.4K</div>
            <div className="metric-trend down">↓4%</div>
          </div>
          <div className="metric-footer">vs last month</div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="middle-row">
        {/* Revenue Chart */}
        <div className="revenue-chart-section">
          <div className="revenue-header">
            <div className="revenue-title-group">
              <h3>Revenue ↕</h3>
              <div className="revenue-main-val">
                $32.209 <span className="revenue-trend">+22% vs last month</span>
              </div>
            </div>
            <div className="revenue-tabs">
              <button className="rev-tab">1 D</button>
              <button className="rev-tab">1 W</button>
              <button className="rev-tab">1 M</button>
              <button className="rev-tab">6 M</button>
              <button className="rev-tab active">1 Y</button>
              <button className="rev-tab">ALL</button>
            </div>
          </div>
          <div style={{ width: '100%', height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={revenueData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: 'var(--text-secondary)'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: 'var(--text-secondary)'}} tickFormatter={(value) => `${value}k`} />
                <Tooltip cursor={{fill: 'var(--bg-color)'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)'}} />
                <Bar dataKey="val1" fill="var(--bg-color)" barSize={40} />
                <Bar dataKey="val2" fill="var(--primary-color)" barSize={40} style={{transform: 'translateX(-40px)'}} opacity={0.3}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calendar Widget */}
        <div className="calendar-widget">
          <div className="cal-header">
            <h3>Calendar</h3>
            <button className="icon-btn-outline" style={{border: 'none'}}><MoreVertical size={16}/></button>
          </div>
          <div className="cal-nav">
            <ChevronLeft size={16} color="var(--text-secondary)"/>
            October 2026
            <ChevronRight size={16} color="var(--text-secondary)"/>
          </div>
          <div className="cal-days">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          <div className="cal-dates">
            <span className="cal-date">5</span>
            <span className="cal-date">6</span>
            <span className="cal-date">7</span>
            <span className="cal-date active">8</span>
            <span className="cal-date">9</span>
            <span className="cal-date">10</span>
            <span className="cal-date">11</span>
          </div>

          <div className="event-list">
            <div className="event-item">
              <div className="event-title">Mesh Weekly Meeting</div>
              <div className="event-time">9.00 am - 10.00 am</div>
              <div className="event-footer">
                <div className="task-avatars">
                  <img src="https://i.pravatar.cc/150?u=1" alt="U" />
                  <img src="https://i.pravatar.cc/150?u=2" alt="U" />
                  <img src="https://i.pravatar.cc/150?u=3" alt="U" />
                  <div style={{width: 24, height: 24, borderRadius: '50%', background: '#EAE6FE', color: '#7952F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', marginLeft: -8, border: '2px solid var(--surface-color)'}}>+7</div>
                </div>
                <button className="platform-btn">On Google Meet ❯</button>
              </div>
            </div>

            <div className="event-item" style={{borderTop: 'none', paddingTop: 0}}>
              <div className="event-title">Gamification Demo</div>
              <div className="event-time">10.45 am - 11.45 am</div>
              <div className="event-footer">
                <div className="task-avatars">
                  <img src="https://i.pravatar.cc/150?u=4" alt="U" />
                  <img src="https://i.pravatar.cc/150?u=5" alt="U" />
                  <img src="https://i.pravatar.cc/150?u=6" alt="U" />
                </div>
                <button className="platform-btn">On Slack ❯</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* Leads Management */}
        <div className="dash-panel">
          <div className="panel-header">
            <h3>Leads Management</h3>
            <button className="icon-btn-outline" style={{border: 'none'}}><MoreVertical size={16}/></button>
          </div>
          <div className="leads-tabs">
            <button className="lead-tab active">Status</button>
            <button className="lead-tab">Sources</button>
            <button className="lead-tab">Qualification</button>
          </div>
          <div className="lead-progress-list">
            <div className="lead-progress-item">
              <div className="lead-progress-label">Qualified</div>
              <div className="lead-progress-bar"><div className="lead-progress-fill" style={{width: '75%'}}></div></div>
            </div>
            <div className="lead-progress-item">
              <div className="lead-progress-label">Contacted</div>
              <div className="lead-progress-bar"><div className="lead-progress-fill" style={{width: '45%', opacity: 0.8}}></div></div>
            </div>
            <div className="lead-progress-item">
              <div className="lead-progress-label">Lost</div>
              <div className="lead-progress-bar"><div className="lead-progress-fill" style={{width: '30%', opacity: 0.6}}></div></div>
            </div>
            <div className="lead-progress-item">
              <div className="lead-progress-label">Won</div>
              <div className="lead-progress-bar"><div className="lead-progress-fill" style={{width: '60%', opacity: 0.9}}></div></div>
            </div>
          </div>
        </div>

        {/* Top Country */}
        <div className="dash-panel" style={{display: 'flex', flexDirection: 'column'}}>
          <div className="panel-header">
            <h3>Top Country</h3>
            <button className="icon-btn-outline" style={{border: 'none'}}><MoreVertical size={16}/></button>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
               <span style={{ fontSize: '48px' }}>🇦🇺</span>
            </div>
            <div className="country-list">
              <div className="country-item">
                <span className="country-name">1 🇦🇺 Australia</span>
                <span className="country-val">48%</span>
              </div>
              <div className="country-item">
                <span className="country-name">2 🇲🇾 Malaysia</span>
                <span className="country-val">33%</span>
              </div>
              <div className="country-item">
                <span className="country-name">3 🇮🇩 Indonesia</span>
                <span className="country-val">25%</span>
              </div>
              <div className="country-item">
                <span className="country-name">4 🇸🇬 Singapore</span>
                <span className="country-val">17%</span>
              </div>
              <div className="view-more-btn">View more →</div>
            </div>
          </div>
        </div>

        {/* Retention Rate */}
        <div className="dash-panel">
          <div className="panel-header">
            <h3>Retention Rate</h3>
            <button className="icon-btn-outline" style={{border: 'none'}}><MoreVertical size={16}/></button>
          </div>
          <div className="retention-val">
            95% <span className="revenue-trend">+12% vs last month</span>
          </div>
          <div className="retention-legend">
            <div className="legend-item"><div className="legend-dot" style={{background: '#D8B4E2'}}></div> SMEs</div>
            <div className="legend-item"><div className="legend-dot" style={{background: '#A88EEB'}}></div> Startups</div>
            <div className="legend-item"><div className="legend-dot" style={{background: '#7952F5'}}></div> Enterprises</div>
          </div>
          <div style={{ width: '100%', height: 160 }}>
            <ResponsiveContainer>
              <BarChart data={retentionData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: 'var(--text-secondary)'}} dy={10} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="s1" stackId="a" fill="#D8B4E2" radius={[0, 0, 4, 4]} barSize={16} />
                <Bar dataKey="s2" stackId="a" fill="#A88EEB" barSize={16} />
                <Bar dataKey="s3" stackId="a" fill="#7952F5" radius={[4, 4, 0, 0]} barSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
