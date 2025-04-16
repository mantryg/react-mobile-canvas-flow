
import { useState } from 'react';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import '../styles/App.css';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      <div className="mobile-frame">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default Index;
