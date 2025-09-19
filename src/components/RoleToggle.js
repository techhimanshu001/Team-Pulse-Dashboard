import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchRole } from '../redux/slices/roleSlice';

const RoleToggle = () => {
  const dispatch = useDispatch();
  const currentRole = useSelector(state => state.role.currentRole);

  const handleToggle = () => {
    dispatch(switchRole(currentRole === 'lead' ? 'member' : 'lead'));
  };

  return (
    <div className="role-toggle">
      <button 
        onClick={handleToggle}
        className={`toggle-btn ${currentRole === 'lead' ? 'active' : ''}`}
      >
        Switch to {currentRole === 'lead' ? 'Member' : 'Lead'} View
      </button>
    </div>
  );
};

export default RoleToggle;