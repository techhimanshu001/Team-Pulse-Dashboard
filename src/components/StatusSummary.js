import React from 'react';
import { useSelector } from 'react-redux';

const StatusSummary = () => {
  const members = useSelector(state => state.members.members);
  
  const statusCounts = members.reduce((acc, member) => {
    acc[member.status] = (acc[member.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="status-summary">
      <h3>Team Status Summary</h3>
      <div className="summary-cards">
        <div className="summary-card working">
          <h4>Working</h4>
          <p>{statusCounts.Working || 0}</p>
        </div>
        <div className="summary-card break">
          <h4>Break</h4>
          <p>{statusCounts.Break || 0}</p>
        </div>
        <div className="summary-card meeting">
          <h4>Meeting</h4>
          <p>{statusCounts.Meeting || 0}</p>
        </div>
        <div className="summary-card offline">
          <h4>Offline</h4>
          <p>{statusCounts.Offline || 0}</p>
        </div>
      </div>
      <p className="summary-text">
        {`${statusCounts.Working || 0} Working · ${statusCounts.Meeting || 0} Meeting · ${statusCounts.Break || 0} Break`}
      </p>
    </div>
  );
};

export default StatusSummary;