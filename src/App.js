import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import AdminPage from './components/AdminPanel';
import FeatureToggle from './components/FeatureToggle';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [featureEnabled, setFeatureEnabled] = useState(false);

  const handleLogin = (isAdmin) => {
    setLoggedIn(true);
    setIsAdmin(isAdmin);
  };

  const handleFeatureToggle = () => {
    setFeatureEnabled(!featureEnabled);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <>
          <MainPage isAdmin={isAdmin} onFeatureToggle={handleFeatureToggle} />
          <FeatureToggle isAdmin={isAdmin} />
          {isAdmin && <AdminPage />}
        </>
      )}
    </div>
  );
}

export default App;
