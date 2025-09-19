import React from 'react';
import { useSelector } from 'react-redux';
import RoleToggle from './RoleToggle';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { currentRole, currentUser } = useSelector(state => state.role);

  return (
    <header className="dashboard-header">
      <h1>Team Pulse Dashboard</h1>
      <div className="header-right">
        <span>Welcome, {currentUser} ({currentRole})</span>
        <ThemeToggle />
        <RoleToggle />
      </div>
    </header>
  );
};

export default Header;