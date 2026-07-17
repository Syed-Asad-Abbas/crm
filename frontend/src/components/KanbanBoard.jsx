import React, { useState, useEffect } from 'react';
import { Paperclip, Calendar, MessageSquare, Edit2, Maximize2, MoreHorizontal, Activity } from 'lucide-react';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/tasks`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTaskStatus = async (taskId, newStatus) => {
    // Optimistic UI update
    setTasks(prevTasks => prevTasks.map(t => 
      t.id === taskId ? { ...t, status: newStatus } : t
    ));

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await fetch(`${apiUrl}/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (error) {
      console.error('Error updating task status:', error);
      // Revert on failure
      fetchTasks();
    }
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
    e.target.classList.add('dragging');
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('dragging');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (taskId) {
      updateTaskStatus(taskId, status);
    }
  };

  const columns = [
    { id: 'backlog', title: 'Backlog', icon: '📁' },
    { id: 'in_progress', title: 'In progress', icon: '⚡' },
    { id: 'validation', title: 'Validation', icon: '✨' },
    { id: 'done', title: 'Done', icon: '✅' }
  ];

  if (loading) return <div>Loading tasks...</div>;

  return (
    <div className="kanban-board">
      {columns.map(col => {
        const columnTasks = tasks.filter(t => t.status === col.id);
        
        return (
          <div 
            key={col.id} 
            className="kanban-column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, col.id)}
          >
            <div className="column-header">
              <div className="column-title-group">
                <span>{col.icon}</span>
                <span>{col.title}</span>
                <span className="column-count">{columnTasks.length}</span>
              </div>
              <MoreHorizontal size={16} style={{color: 'var(--text-tertiary)'}}/>
            </div>
            
            <div className="task-list">
              {columnTasks.map(task => (
                <div 
                  key={task.id} 
                  className="task-card"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  onDragEnd={handleDragEnd}
                >
                  <div className="task-header">
                    <div className="task-id">
                      <Paperclip size={12} />
                      <span>MDS-{task.id.substring(0,4)}</span>
                    </div>
                    {task.priority === 'Urgent' && <span className="badge badge-urgent">🚩 Urgent</span>}
                    {task.priority === 'Normal' && <span className="badge badge-normal">🚩 Normal</span>}
                    {task.priority === 'Low' && <span className="badge badge-low">🏁 Low</span>}
                  </div>
                  <div className="task-title">{task.title}</div>
                  <div className="task-desc">{task.description}</div>
                  
                  {task.due_date && (
                    <div className="task-meta">
                      <div className="task-meta-item">
                        <Calendar size={12} />
                        <span>Due: {new Date(task.due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="task-footer">
                    <div className="task-avatars">
                      <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
                    </div>
                    <div className="task-meta-item">
                      <MessageSquare size={12} />
                      <span>{Math.floor(Math.random() * 15)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
