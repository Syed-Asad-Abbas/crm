import React from 'react';
import { Plus, Download, RefreshCw, Search, Filter, MessageSquare, ExternalLink } from 'lucide-react';
import './Projects.css';

const proposals = {
  open: [
    { id: 'PRO-000001', client: 'Stehr, Kuhic and klocko', total: '$1,932.00', date: '10-04-25', openTill: '15-04-25', comments: 2 },
    { id: 'PRO-000002', client: 'Samantha Murazik', total: '$500.00', date: '11-04-25', openTill: '16-04-25', comments: 1 },
    { id: 'PRO-000003', client: 'Grant, Lockman and Rolfson', total: '$1,200.00', date: '12-04-25', openTill: '20-04-25', comments: 3 },
    { id: 'PRO-000004', client: 'Tony Stark', total: '$2,000.00', date: '14-04-25', openTill: '20-04-25', comments: 0 },
  ],
  received: [
    { id: 'PRO-000005', client: 'David,Smith and Roja', total: '$800.00', date: '16-04-25', openTill: '22-04-25', comments: 0 },
    { id: 'PRO-000006', client: 'James and William', total: '$1,300.00', date: '17-04-25', openTill: '24-04-25', comments: 2 },
    { id: 'PRO-000007', client: 'Henry And Cavil', total: '$3,200.00', date: '20-04-25', openTill: '30-04-25', comments: 4 },
  ],
  declined: [
    { id: 'PRO-000008', client: 'Liam, Noah and Oliver', total: '$1,456.00', date: '22-04-25', openTill: '02-05-25', comments: 2 },
    { id: 'PRO-000009', client: 'Benjamin and Liam', total: '$932.00', date: '23-04-25', openTill: '05-05-25', comments: 1 },
    { id: 'PRO-000010', client: 'Levi, Kuhic and klocko', total: '$2,000.00', date: '24-04-25', openTill: '06-05-25', comments: 0 },
    { id: 'PRO-000011', client: 'James and Mateo', total: '$1,200.00', date: '25-04-25', openTill: '08-05-25', comments: 3 },
  ],
  accepted: [
    { id: 'PRO-000012', client: 'Michael and Daniel', total: '$400.00', date: '26-04-25', openTill: '10-05-25', comments: 0 },
    { id: 'PRO-000013', client: 'William, Oliver and Leo', total: '$900.00', date: '28-04-25', openTill: '12-05-25', comments: 1 },
    { id: 'PRO-000014', client: 'Lockman, Tony and Smith', total: '$1,235.00', date: '29-04-25', openTill: '15-05-25', comments: 2 },
  ]
};

const ProposalCard = ({ data }) => (
  <div className="proposal-card">
    <div className="proposal-card-header">
      <span className="proposal-id">{data.id}</span>
      <ExternalLink size={14} color="var(--text-tertiary)"/>
    </div>
    <div className="proposal-client">{data.client}</div>
    <div className="proposal-details">
      <span>Total: {data.total}</span>
      <span>Date: {data.date}</span>
      <span>Open Till: {data.openTill}</span>
    </div>
    <div className="proposal-card-footer">
      <div className="proposal-comments">
        <MessageSquare size={14}/> Comments: {data.comments}
      </div>
      <div className="proposal-view-link">View</div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Proposals</h1>
        <button className="btn btn-primary" style={{background: '#1F2937'}}><Plus size={16}/> New Proposal</button>
      </div>

      <div className="projects-toolbar">
        <div className="projects-toolbar-left">
          <button className="btn btn-secondary"><Download size={16}/> Export</button>
          <button className="icon-btn-outline"><RefreshCw size={16}/></button>
        </div>
        <div className="projects-toolbar-right">
          <div className="search-proposals">
            <Search size={16} color="var(--text-tertiary)"/>
            <input type="text" placeholder="Search Proposals" />
          </div>
          <div className="filter-proposals">
            <Filter size={16}/> Filter
          </div>
        </div>
      </div>

      <div className="proposals-board">
        <div className="proposal-column">
          <div className="proposal-column-header header-open">
            Open - {proposals.open.length} Proposals
          </div>
          <div className="proposal-list">
            {proposals.open.map(p => <ProposalCard key={p.id} data={p} />)}
          </div>
        </div>

        <div className="proposal-column">
          <div className="proposal-column-header header-received">
            Received - {proposals.received.length} Proposals
          </div>
          <div className="proposal-list">
            {proposals.received.map(p => <ProposalCard key={p.id} data={p} />)}
          </div>
        </div>

        <div className="proposal-column">
          <div className="proposal-column-header header-declined">
            Declined - {proposals.declined.length} Proposals
          </div>
          <div className="proposal-list">
            {proposals.declined.map(p => <ProposalCard key={p.id} data={p} />)}
          </div>
        </div>

        <div className="proposal-column">
          <div className="proposal-column-header header-accepted">
            Accepted - {proposals.accepted.length} Proposals
          </div>
          <div className="proposal-list">
            {proposals.accepted.map(p => <ProposalCard key={p.id} data={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
