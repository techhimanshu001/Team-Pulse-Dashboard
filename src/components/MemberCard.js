import React from 'react';
import { useSelector } from 'react-redux';

const MemberCard = ({ member }) => {
  const tasks = useSelector(state => state.tasks.tasks);
  const memberTasks = tasks.filter(task => task.memberId === member.id);
  const activeTasks = memberTasks.filter(task => task.progress < 100).length;

  const getStatusClass = (status) => {
    switch (status) {
      case 'Working': return 'status-working';
      case 'Break': return 'status-break';
      case 'Meeting': return 'status-meeting';
      default: return 'status-offline';
    }
  };

  return (
    <div className="member-card">
      <div className="member-info">
        <h3>{member.name}</h3>
        <span className={`status-badge ${getStatusClass(member.status)}`}>
          {member.status}
        </span>
      </div>
      <div className="member-stats">
        <p>Active Tasks: {activeTasks}</p>
        <p>Total Tasks: {memberTasks.length}</p>
      </div>
    </div>
  );
};

export default MemberCard;