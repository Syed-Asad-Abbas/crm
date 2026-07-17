import React, { useState, useEffect } from 'react';
import { Plus, MoreHorizontal, Filter, Search, Settings2, ArrowUpRight } from 'lucide-react';
import './Contacts.css';

const mockContacts = [
  { id: 1, initials: 'AE', name: 'Amelia Evans', company: 'Glaze & Grain', position: 'UX Researcher', city: 'Niagara Falls', status: 'Active' },
  { id: 2, initials: 'AT', name: 'Ava Thompson', company: 'Apex Logic', position: 'Chief Designer', city: 'Saratoga Springs', status: 'New' },
  { id: 3, initials: 'BT', name: 'Benjamin Taylor', company: 'Echo Media', position: 'Software Developer', city: 'Troy', status: 'Active' },
  { id: 4, initials: 'CC', name: 'Charlotte Campbell', company: 'Aura Wellness', position: 'Customer Service Manager', city: 'Ithaca', status: 'Non-targeted' },
  { id: 5, initials: 'EC', name: 'Emma Collins', company: 'TerraPulse', position: 'Project Manager', city: 'Yonkers, New York', status: 'Active' },
  { id: 6, initials: 'EC', name: 'Ethan Cooper', company: 'Nova Systems', position: 'Operations Director', city: 'White Plains', status: 'VIP' },
  { id: 7, initials: 'IS', name: 'Isabella Stewart', company: 'Market Flow', position: 'Marketing Coordinator', city: 'Binghamton', status: 'Active' },
];

const Contacts = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario we fetch from our API
    const fetchContacts = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/contacts`);
        const data = await response.json();
        if (data && data.length > 0) {
          // Map backend data to our frontend shape if needed, or just mix them
          const backendContacts = data.map(c => ({
            id: c.id,
            initials: c.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase(),
            name: c.name,
            company: c.company || 'Unknown',
            position: c.role || 'Unknown',
            city: 'Remote',
            status: c.status === 'Active' ? 'Active' : (c.status === 'Lead' ? 'New' : 'Non-targeted')
          }));
          setContacts([...mockContacts, ...backendContacts]);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const getStatusClass = (status) => {
    switch(status) {
      case 'Active': return 'status-active';
      case 'New': return 'status-new';
      case 'VIP': return 'status-vip';
      case 'Non-targeted': return 'status-nontargeted';
      default: return 'status-nontargeted';
    }
  };

  return (
    <div className="contacts-container">
      {/* Header */}
      <div className="contacts-header">
        <div className="contacts-tabs">
          <div className="contacts-tab active">Default</div>
          <div className="contacts-tab">Only important</div>
          <div className="contacts-tab"><Plus size={16} /></div>
        </div>
        <div className="contacts-header-actions">
          <button className="btn" style={{background: '#111827', color: 'white', borderRadius: '20px', padding: '6px 16px'}}>
            New Contact
          </button>
          <button className="icon-btn"><MoreHorizontal size={18} /></button>
        </div>
      </div>

      {/* Widgets */}
      <div className="contacts-widgets">
        <div className="contact-widget">
          <div className="contact-widget-title">Total contacts <ArrowUpRight size={12} color="var(--status-low)"/></div>
          <div className="contact-widget-value">936</div>
          <div className="widget-sparkline"></div>
        </div>
        
        <div className="contact-widget">
          <div className="contact-widget-title">Active contacts <ArrowUpRight size={12} color="var(--status-low)"/></div>
          <div className="contact-widget-value">856 <span className="contact-widget-sub">94%</span></div>
          <div className="widget-sparkline"></div>
        </div>

        <div className="contact-widget">
          <div className="contact-widget-title">Forgotten</div>
          <div className="contact-widget-value">80 <span className="contact-widget-sub">6%</span></div>
          <div className="widget-bar-gauge">
            {[...Array(40)].map((_, i) => (
              <div key={i} className={`gauge-line ${i < 5 ? 'active' : ''}`}></div>
            ))}
          </div>
        </div>

        <div className="contact-widget">
          <div className="contact-widget-title">Contact velocity</div>
          <div className="contact-widget-value">1:42 <span className="contact-widget-sub" style={{color: 'var(--text-secondary)'}}>Normal</span></div>
          <div className="widget-bar-gauge">
            {[...Array(40)].map((_, i) => (
              <div key={i} className={`gauge-line ${i < 15 ? 'active' : ''}`}></div>
            ))}
          </div>
        </div>

        <div className="contact-widget">
          <div className="contact-widget-title">Data health</div>
          <div className="contact-widget-value">82%</div>
          <div className="widget-bar-gauge">
            {[...Array(40)].map((_, i) => (
              <div key={i} className={`gauge-line ${i < 32 ? 'active' : ''}`}></div>
            ))}
            <div style={{width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderBottom: '6px solid var(--text-primary)', transform: 'rotate(180deg)', marginTop: '-12px', marginLeft: '-20px'}}></div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="contacts-toolbar">
        <div className="toolbar-left">
          <div className="toolbar-item"><Filter size={16} /> Filters</div>
          <div className="toolbar-item"><Search size={16} /> Search</div>
        </div>
        <div className="toolbar-item">
          <Settings2 size={16} /> Customize
        </div>
      </div>

      {/* Table */}
      <div className="contacts-table-container">
        <table className="contacts-table">
          <thead>
            <tr>
              <th style={{width: '40px'}}><input type="checkbox" /></th>
              <th>NAME <span>⌄</span></th>
              <th>COMPANY</th>
              <th>POSITION</th>
              <th>CITY</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, idx) => (
              <tr key={idx}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="contact-name-cell">
                    <div className="contact-avatar-initials">{contact.initials}</div>
                    {contact.name}
                  </div>
                </td>
                <td>{contact.company}</td>
                <td>{contact.position}</td>
                <td>{contact.city}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(contact.status)}`}>
                    {contact.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
