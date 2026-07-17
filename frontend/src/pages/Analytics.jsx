import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, Plus, Calendar, MoreHorizontal, DollarSign, ShoppingCart, Users as UsersIcon, Percent, Check, X, Clock, Loader } from 'lucide-react';
import './Analytics.css';

const data = [
  { name: 'Jan', value: 120, prev: 90 },
  { name: 'Feb', value: 80, prev: 70 },
  { name: 'Mar', value: 130, prev: 110 },
  { name: 'Apr', value: 100, prev: 80 },
  { name: 'May', value: 140, prev: 100 },
  { name: 'Jun', value: 90, prev: 105 },
  { name: 'Jul', value: 110, prev: 110 },
  { name: 'Aug', value: 80, prev: 75 },
  { name: 'Sep', value: 150, prev: 120 },
  { name: 'Oct', value: 130, prev: 110 },
  { name: 'Nov', value: 140, prev: 90 },
  { name: 'Dec', value: 160, prev: 140 },
];

const Analytics = () => {
  return (
    <div className="analytics-container">
      {/* Header */}
      <div className="analytics-header">
        <h1>Welcome back, Andrew👋</h1>
        <div className="analytics-header-actions">
          <div className="date-badge">Today ⌄</div>
          <div className="date-badge"><Calendar size={16}/> 6 Jun 2026</div>
          <button className="btn btn-secondary"><Download size={16}/> Export</button>
          <button className="btn btn-primary"><Plus size={16}/> New Product</button>
        </div>
      </div>

      {/* Top Cards */}
      <div className="analytics-cards">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{background: '#7952F5'}}><DollarSign size={20}/></div>
            <div className="stat-title">Total Revenue</div>
            <MoreHorizontal size={16} color="var(--text-tertiary)"/>
          </div>
          <div className="stat-value">$94,127</div>
          <div className="stat-trend trend-up">↗ 9% <span style={{color: 'var(--text-secondary)'}}>vs last month</span></div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{background: '#00CC66'}}><ShoppingCart size={20}/></div>
            <div className="stat-title">Total Orders</div>
            <MoreHorizontal size={16} color="var(--text-tertiary)"/>
          </div>
          <div className="stat-value">9,654</div>
          <div className="stat-trend trend-up">↗ 2.98% <span style={{color: 'var(--text-secondary)'}}>vs last month</span></div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{background: '#A855F7'}}><UsersIcon size={20}/></div>
            <div className="stat-title">New Customers</div>
            <MoreHorizontal size={16} color="var(--text-tertiary)"/>
          </div>
          <div className="stat-value">6,013</div>
          <div className="stat-trend trend-up">↗ 1.65% <span style={{color: 'var(--text-secondary)'}}>vs last month</span></div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{background: '#0EA5E9'}}><Percent size={20}/></div>
            <div className="stat-title">Avg. Order Value</div>
            <MoreHorizontal size={16} color="var(--text-tertiary)"/>
          </div>
          <div className="stat-value">$992</div>
          <div className="stat-trend trend-down">↘ 3.5% <span style={{color: 'var(--text-secondary)'}}>vs last month</span></div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="analytics-main-row">
        {/* Sales Performance Chart */}
        <div className="chart-section">
          <div className="chart-header">
            <div className="chart-title">
              <h2>Sales performance</h2>
              <div className="chart-subtitle">Total Revenue</div>
              <div className="chart-main-val">$155k</div>
            </div>
            <div className="chart-controls">
              <div style={{display: 'flex', gap: 16, fontSize: '0.75rem', color: 'var(--text-secondary)'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: 4}}><span style={{width: 8, height: 8, borderRadius: '50%', background: '#7952F5'}}></span> This year</span>
                <span style={{display: 'flex', alignItems: 'center', gap: 4}}><span style={{width: 8, height: 8, borderRadius: '50%', background: '#C4B5FD'}}></span> Last year</span>
              </div>
              <div className="chart-tabs">
                <button className="chart-tab">1D</button>
                <button className="chart-tab">7D</button>
                <button className="chart-tab">1M</button>
                <button className="chart-tab active">1Y</button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: 'var(--text-secondary)'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)'}} />
                <Bar dataKey="prev" fill="#C4B5FD" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="value" fill="#7952F5" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Distribution */}
        <div className="distribution-section">
          <div className="dist-header">
            <h2>Order distribution</h2>
            <div className="chart-tabs">
              <button className="chart-tab">1D</button>
              <button className="chart-tab">7D</button>
              <button className="chart-tab active">1M</button>
              <button className="chart-tab">1Y</button>
            </div>
          </div>
          <div className="chart-subtitle" style={{marginBottom: '4px'}}>Total order</div>
          <div className="chart-main-val" style={{marginBottom: '24px'}}>9,654</div>

          <div className="dist-progress-bar">
            <div className="dist-segment" style={{width: '52%', background: '#FFC107'}}></div>
            <div className="dist-segment" style={{width: '28%', background: '#0EA5E9'}}></div>
            <div className="dist-segment" style={{width: '12%', background: '#10B981'}}></div>
            <div className="dist-segment" style={{width: '8%', background: '#EF4444'}}></div>
          </div>

          <div className="dist-list">
            <div className="dist-item">
              <div className="dist-item-label">
                <div className="dist-dot" style={{background: '#FFF8E1'}}><Clock size={10} color="#FFC107"/></div>
                Pending
              </div>
              <div className="dist-item-value">5,020 <span className="dist-item-percent">52%</span></div>
            </div>
            <div className="dist-item">
              <div className="dist-item-label">
                <div className="dist-dot" style={{background: '#E0F2FE'}}><Loader size={10} color="#0EA5E9"/></div>
                Processing
              </div>
              <div className="dist-item-value">2,703 <span className="dist-item-percent">28%</span></div>
            </div>
            <div className="dist-item">
              <div className="dist-item-label">
                <div className="dist-dot" style={{background: '#D1FAE5'}}><Check size={10} color="#10B981"/></div>
                Delivered
              </div>
              <div className="dist-item-value">1,158 <span className="dist-item-percent">12%</span></div>
            </div>
            <div className="dist-item">
              <div className="dist-item-label">
                <div className="dist-dot" style={{background: '#FEE2E2'}}><X size={10} color="#EF4444"/></div>
                Cancelled
              </div>
              <div className="dist-item-value">773 <span className="dist-item-percent">8%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="orders-section">
        <div className="orders-header">
          <h2>Orders list</h2>
          <div style={{display: 'flex', gap: 16}}>
            <div className="search-bar" style={{background: 'var(--bg-color)'}}>
              <input type="text" placeholder="Search" className="search-input" />
            </div>
            <div className="date-badge"><Calendar size={16}/> 2 Jun - 6 Jun</div>
          </div>
        </div>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID ↕</th>
              <th>Product ↕</th>
              <th>Customer ↕</th>
              <th>Order date ↕</th>
              <th>Status ↕</th>
              <th>Price($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#05821</td>
              <td>
                <div className="product-cell">
                  <div className="product-img"></div>
                  <div>
                    <div className="product-info-name">Apple studio display</div>
                    <div className="product-info-desc">27" Retina 5K, Nano-texture</div>
                  </div>
                </div>
              </td>
              <td>Daniel Wesley</td>
              <td>Jun 02, 2026</td>
              <td><span className="status-badge-orders status-pending">Pending</span></td>
              <td style={{fontWeight: 500}}>$1,599</td>
            </tr>
            <tr>
              <td>#05822</td>
              <td>
                <div className="product-cell">
                  <div className="product-img"></div>
                  <div>
                    <div className="product-info-name">Ergonomic Chair Pro</div>
                    <div className="product-info-desc">Lumbar support, mesh back</div>
                  </div>
                </div>
              </td>
              <td>Karen Page</td>
              <td>Jun 02, 2026</td>
              <td><span className="status-badge-orders status-delivered">Delivered</span></td>
              <td style={{fontWeight: 500}}>$2,750</td>
            </tr>
            <tr>
              <td>#05823</td>
              <td>
                <div className="product-cell">
                  <div className="product-img"></div>
                  <div>
                    <div className="product-info-name">Wooden Bookshelf</div>
                    <div className="product-info-desc">6-tier, solid oak finish</div>
                  </div>
                </div>
              </td>
              <td>Foggy Nelson</td>
              <td>Jun 03, 2026</td>
              <td><span className="status-badge-orders status-delivered">Delivered</span></td>
              <td style={{fontWeight: 500}}>$1,980</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
