import React from 'react';
import { useSelector } from 'react-redux';
import MemberCard from '../components/MemberCard';
import StatusSelector from '../components/StatusSelector';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import StatusSummary from '../components/StatusSummary';

const Dashboard = () => {
  const currentRole = useSelector(state => state.role.currentRole);
  const members = useSelector(state => state.members.members);

  return (
    <div className="dashboard">
      {currentRole === 'lead' ? (
        // Team Lead View
        <>
          <StatusSummary />
          <div className="dashboard-section">
            <h2>Team Members</h2>
            <div className="members-grid">
              {members.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
          <div className="dashboard-section">
            <TaskForm />
          </div>
        </>
      ) : (
        // Team Member View
        <>
          <StatusSelector />
          <div className="dashboard-section">
            <TaskList />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;