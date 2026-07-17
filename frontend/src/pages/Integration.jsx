import React, { useState } from 'react';
import { Plug } from 'lucide-react';
import './Integration.css';

const integrations = [
  { id: 1, name: 'HubSpot', bg: '#FF7A59', letter: 'H' },
  { id: 2, name: 'Keap', bg: '#72C750', letter: 'K' },
  { id: 3, name: 'Pipedrive', bg: '#00B259', letter: 'P' },
  { id: 4, name: 'Active Campaign', bg: '#356AE6', letter: 'A' },
  { id: 5, name: 'Zendesk', bg: '#03363D', letter: 'Z' },
  { id: 6, name: 'Teamwork', bg: '#362C5B', letter: 'T' },
];

const Integration = () => {
  return (
    <div className="integration-layout">
      {/* Main Content Area */}
      <div className="integration-content">
        <h2>CRM Integration</h2>
        
        <div className="integration-grid">
          {integrations.map(int => (
            <div className="integration-card" key={int.id}>
              <div className="integration-card-header">
                <div className="int-logo" style={{background: int.bg}}>
                  {int.letter}
                </div>
                <button className="btn-connect">
                  <Plug size={14} /> Connect
                </button>
              </div>
              <div className="int-card-title">{int.name}</div>
              <div className="int-card-desc">
                Seamlessly integrate real estate data with CRM systems for efficient buyer and agent management solutions.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integration;
