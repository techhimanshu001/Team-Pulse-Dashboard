
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgress, deleteTask } from '../redux/slices/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const currentUser = useSelector(state => state.role.currentUser);
  const members = useSelector(state => state.members.members);
  
  const currentUserMember = members.find(m => m.name === currentUser);
  const userTasks = currentUserMember 
    ? tasks.filter(task => task.memberId === currentUserMember.id)
    : [];

  const handleProgressChange = (taskId, change) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      const newProgress = Math.min(100, Math.max(0, task.progress + change));
      dispatch(updateProgress({ taskId, progress: newProgress }));
    }
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(taskId));
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isOverdue = (dueDate) => {
    return new Date(dueDate) < new Date() && new Date(dueDate).setHours(0,0,0,0) !== new Date().setHours(0,0,0,0);
  };

  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      {userTasks.map(task => (
  <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
    <div className="task-info">
      <h4>{task.title}</h4>
      <p className={`due-date ${isOverdue(task.dueDate) && !task.completed ? 'overdue' : ''}`}>
        Due: {formatDate(task.dueDate)}
        {isOverdue(task.dueDate) && !task.completed && ' (Overdue)'}
      </p>
      {task.completed && <span className="completed-badge">Completed</span>}
    </div>
    <div className="task-progress">
      <div className="progress-header">
        <span>Progress</span>
        <span>{task.progress}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${task.progress}%` }}
        ></div>
      </div>
      <div className="progress-controls">
        <button 
          onClick={() => handleProgressChange(task.id, -10)}
          disabled={task.progress <= 0}
        >
          -10%
        </button>
        <button 
          onClick={() => handleProgressChange(task.id, 10)}
          disabled={task.progress >= 100}
        >
          +10%
        </button>
        <button 
          className="delete-btn"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
))}
    </div>
  );
};

export default TaskList;