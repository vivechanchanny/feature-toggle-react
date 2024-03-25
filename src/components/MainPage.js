import React from 'react';

const MainPage = ({ isAdmin, onFeatureToggle }) => {
  const handleClick = () => {
    onFeatureToggle();
  };

  return (
    <div>
      <h2>Main Page</h2>
      <button onClick={handleClick}>Toggle Feature</button>
      <p>User Type: {isAdmin ? 'Admin' : 'Normal User'}</p>
    </div>
  );
};

export default MainPage;
