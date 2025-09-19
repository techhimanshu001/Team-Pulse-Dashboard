import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';

// Theme wrapper component
function ThemeWrapper({ children }) {
  const theme = useSelector(state => state.theme.mode);
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return <>{children}</>;
}

function AppContent() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <AppContent />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;