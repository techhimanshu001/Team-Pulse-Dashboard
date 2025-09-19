import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Set initial theme to prevent flash of incorrect theme
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', initialTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);