import React from 'react';

import Login from '../components/Login';

const LoginPage = ({ title }) => {
  return (
    <div className="loginPage">
      <Login title={title} />
    </div>
  );
};

export default LoginPage;
