import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../redux/slices/memberSlice';

const StatusSelector = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.role.currentUser);
  const members = useSelector(state => state.members.members);
  const currentUserStatus = members.find(m => m.name === currentUser)?.status || 'Offline';

  const statusOptions = ['Working', 'Break', 'Meeting', 'Offline'];

  const handleStatusChange = (status) => {
    const memberId = members.find(m => m.name === currentUser)?.id;
    if (memberId) {
      dispatch(updateStatus({ memberId, status }));
    }
  };

  return (
    <div className="status-selector">
      <h3>Update Your Status</h3>
      <div className="status-buttons">
        {statusOptions.map(status => (
          <button
            key={status}
            className={`status-btn ${currentUserStatus === status ? 'active' : ''}`}
            onClick={() => handleStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <p>Current status: <span className="status-indicator">{currentUserStatus}</span></p>
    </div>
  );
};

export default StatusSelector;