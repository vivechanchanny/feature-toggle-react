import React from 'react';

const FeatureToggle = ({ isAdmin }) => {
  const featureEnabled = isAdmin; // Logic to check if feature is enabled based on admin status

  return (
    <div>
      {featureEnabled ? (
        <h1>Feature Enabled for Admins</h1>
      ) : (
        <h1>Feature Disabled</h1>
      )}
    </div>
  );
};

export default FeatureToggle;
