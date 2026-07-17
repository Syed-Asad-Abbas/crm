import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart3, Settings, Calendar as CalendarIcon, FolderKanban, Blocks } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <div className="logo-text">
            <h3>RelateWise</h3>
            <span>microdose.studio</span>
          </div>
        </div>
      </div>
      
      <div className="sidebar-content">
        <div className="nav-section">
          <h4>Overview</h4>
          <nav className="nav-menu">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} end>
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/calendar" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <CalendarIcon size={18} />
              <span>Calendar</span>
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <FolderKanban size={18} />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/contacts" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Users size={18} />
              <span>Contacts</span>
            </NavLink>
            <NavLink to="/analytics" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <BarChart3 size={18} />
              <span>Analytics</span>
            </NavLink>
            <NavLink to="/integration" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Blocks size={18} />
              <span>Integration</span>
            </NavLink>
          </nav>
        </div>

        <div className="nav-section">
          <h4>System</h4>
          <nav className="nav-menu">
            <NavLink to="/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Settings size={18} />
              <span>Settings</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
