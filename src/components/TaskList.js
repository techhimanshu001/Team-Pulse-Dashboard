import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgress } from '../redux/slices/taskSlice';

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

  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      {userTasks.length === 0 ? (
        <p>No tasks assigned</p>
      ) : (
        userTasks.map(task => (
          <div key={task.id} className="task-item">
            <div className="task-info">
              <h4>{task.title}</h4>
              <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
            <div className="task-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <span>{task.progress}%</span>
              <div className="progress-controls">
                <button onClick={() => handleProgressChange(task.id, -10)}>-10%</button>
                <button onClick={() => handleProgressChange(task.id, 10)}>+10%</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;