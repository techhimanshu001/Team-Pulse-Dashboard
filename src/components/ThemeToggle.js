import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button 
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span>🌙 Dark Mode</span>
      ) : (
        <span>☀️ Light Mode</span>
      )}
    </button>
  );
};

export default ThemeToggle;