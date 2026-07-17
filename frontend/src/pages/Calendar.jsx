import React from 'react';
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';
import './Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar-container">
      {/* Top Header */}
      <div className="calendar-header">
        <div className="calendar-nav-left">
          <button className="btn-today">Today</button>
          <div className="nav-arrows">
            <button className="icon-btn-outline"><ChevronLeft size={16}/></button>
            <span className="current-date">November 2026</span>
            <button className="icon-btn-outline"><ChevronRight size={16}/></button>
          </div>
        </div>
        <div className="calendar-view-toggle">
          <button className="view-toggle-btn">Month</button>
          <button className="view-toggle-btn">Week</button>
          <button className="view-toggle-btn active">Day</button>
        </div>
      </div>

      <div className="calendar-content">
        {/* Main Schedule Area */}
        <div className="daily-schedule">
          <div className="schedule-header">
            <div className="gmt-label">GMT<br/>+06:00</div>
            <div className="day-column-header">
              <button className="icon-btn-outline" style={{border: 'none'}}><ChevronLeft size={16}/></button>
              <div className="day-label">Monday <span className="day-badge">20</span></div>
              <button className="icon-btn-outline" style={{border: 'none'}}><ChevronRight size={16}/></button>
            </div>
          </div>
          <div className="schedule-grid">
            <div className="time-column">
              <div className="time-slot">10 AM</div>
              <div className="time-slot">11 AM</div>
              <div className="time-slot">12 PM</div>
              <div className="time-slot">01 PM</div>
              <div className="time-slot">02 PM</div>
              <div className="time-slot">03 PM</div>
              <div className="time-slot">04 PM</div>
              <div className="time-slot">05 PM</div>
            </div>
            <div className="events-column">
              {/* 11:30 AM to 12:00 PM is row 1.5, height 0.5 slots (40px) */}
              <div className="event-card event-orange" style={{top: '120px', height: '60px', width: '50%'}}>
                <div className="event-time">
                  11:30 AM - 12:00 PM <MoreVertical size={14}/>
                </div>
                <div className="event-title" style={{marginBottom: '4px'}}>Prepare a presentation for the demo</div>
                <div className="task-avatars">
                  <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=2" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=3" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=4" alt="User" />
                </div>
              </div>

              {/* 01:00 PM to 02:30 PM is row 3, height 1.5 slots (120px) */}
              <div className="event-card event-blue" style={{top: '240px', height: '140px', width: '60%', left: '30%'}}>
                <div className="event-time">
                  01:00 PM - 02:30 PM <MoreVertical size={14}/>
                </div>
                <div className="event-title">Improve your business with very smart way to grow your financial backup more strong.</div>
                <div className="task-avatars">
                  <img src="https://i.pravatar.cc/150?u=5" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=6" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=7" alt="User" />
                  <div style={{width: 24, height: 24, borderRadius: '50%', background: '#0066FF', border: '2px solid var(--surface-color)', marginLeft: -8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'white'}}>+8+</div>
                </div>
              </div>

              {/* 04:00 PM to 05:00 PM is row 6, height 1 slot (80px) */}
              <div className="event-card event-orange" style={{top: '480px', height: '80px', width: '50%'}}>
                <div className="event-time">
                  04:00 PM - 05:00 PM <MoreVertical size={14}/>
                </div>
                <div className="event-title">Make understand to our business module.</div>
                <div className="task-avatars">
                  <img src="https://i.pravatar.cc/150?u=8" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=9" alt="User" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="calendar-sidebar">
          {/* Mini Calendar */}
          <div className="mini-calendar">
            <div className="mini-calendar-header">
              <button className="icon-btn-outline" style={{border: 'none', padding: 0}}><ChevronLeft size={16}/></button>
              November 2026
              <button className="icon-btn-outline" style={{border: 'none', padding: 0}}><ChevronRight size={16}/></button>
            </div>
            <div className="mini-calendar-grid">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                <div key={d} className="mini-calendar-day-label">{d}</div>
              ))}
              
              {/* Row 1 */}
              <div className="mini-calendar-date faded">30</div>
              <div className="mini-calendar-date faded">31</div>
              <div className="mini-calendar-date">1</div>
              <div className="mini-calendar-date">2</div>
              <div className="mini-calendar-date">3</div>
              <div className="mini-calendar-date">4</div>
              <div className="mini-calendar-date">5</div>
              
              {/* Row 2 */}
              <div className="mini-calendar-date">6</div>
              <div className="mini-calendar-date">
                7
                <div className="date-dots"><span className="dot dot-orange"></span></div>
              </div>
              <div className="mini-calendar-date">8</div>
              <div className="mini-calendar-date">
                9
                <div className="date-dots"><span className="dot dot-blue"></span><span className="dot dot-orange"></span></div>
              </div>
              <div className="mini-calendar-date">10</div>
              <div className="mini-calendar-date" style={{border: '1px solid var(--border-color)'}}>11</div>
              <div className="mini-calendar-date">12</div>
              
              {/* Row 3 */}
              <div className="mini-calendar-date">13</div>
              <div className="mini-calendar-date">14</div>
              <div className="mini-calendar-date">15</div>
              <div className="mini-calendar-date">16</div>
              <div className="mini-calendar-date">17</div>
              <div className="mini-calendar-date">
                18
                <div className="date-dots"><span className="dot dot-orange"></span></div>
              </div>
              <div className="mini-calendar-date">19</div>
              
              {/* Row 4 */}
              <div className="mini-calendar-date active">
                20
                <div className="date-dots"><span className="dot dot-orange"></span><span className="dot dot-blue"></span><span className="dot dot-orange"></span></div>
              </div>
              <div className="mini-calendar-date">21</div>
              <div className="mini-calendar-date">22</div>
              <div className="mini-calendar-date">
                23
                <div className="date-dots"><span className="dot dot-blue"></span></div>
              </div>
              <div className="mini-calendar-date">
                24
                <div className="date-dots"><span className="dot dot-orange"></span><span className="dot dot-orange"></span></div>
              </div>
              <div className="mini-calendar-date">25</div>
              <div className="mini-calendar-date">26</div>
              
              {/* Row 5 */}
              <div className="mini-calendar-date">
                27
                <div className="date-dots"><span className="dot dot-blue"></span></div>
              </div>
              <div className="mini-calendar-date">28</div>
              <div className="mini-calendar-date">29</div>
              <div className="mini-calendar-date">
                30
                <div className="date-dots"><span className="dot dot-blue"></span></div>
              </div>
              <div className="mini-calendar-date faded">1</div>
              <div className="mini-calendar-date faded">2</div>
              <div className="mini-calendar-date faded">3</div>
            </div>
          </div>

          {/* Activity Types */}
          <div className="filter-widget">
            <div className="filter-title">Activity Types</div>
            <div className="filter-list">
              <label className="filter-item">
                <input type="checkbox" defaultChecked /> Tasks
              </label>
              <label className="filter-item">
                <input type="checkbox" className="blue" defaultChecked /> Events
              </label>
              <label className="filter-item">
                <input type="checkbox" defaultChecked /> Calls
              </label>
            </div>
          </div>

          {/* Ownership */}
          <div className="filter-widget">
            <div className="filter-title">Ownership</div>
            <div className="filter-list">
              <label className="filter-item">
                <input type="radio" name="owner" defaultChecked /> My Activities
              </label>
              <label className="filter-item">
                <input type="radio" name="owner" /> Events
              </label>
            </div>
          </div>

          {/* Status */}
          <div className="filter-widget">
            <div className="filter-title">Status</div>
            <div className="filter-list">
              <label className="filter-item">
                <input type="radio" name="status" defaultChecked /> Open Activities
              </label>
              <label className="filter-item">
                <input type="radio" name="status" /> Closed Activities
              </label>
              <label className="filter-item">
                <input type="radio" name="status" /> All
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calendar;
