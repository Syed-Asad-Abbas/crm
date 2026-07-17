import { Search, Bell } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="header-left">
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search tasks, contacts..." className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="icon-btn">
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User Avatar" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
