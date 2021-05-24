import React from 'react';
import Logo from '../assets/img/logo.svg';
import Smile from '../assets/img/smile.png';

import '../scss/login.scss';

const Login = ({ title }) => {
  return (
    <div className="login-page">
      <div className="login-page__block">
        <img src={Logo} alt="Logo" />
        <h1>{title[0]}</h1>
        <div className="login-page__block-form">
          <form action="">
            <input type="email" placeholder="введите email" />
            <input type="password" placeholder="введите password" />
          </form>
        </div>
      </div>
      <div className="login-page__block login-page__block--successful">
        <img src={Smile} alt="smile" />
        <h1>{title[1]}</h1>
        <p>Осталось оплатить курс и твой аккаунт будет подтвержден.</p>
      </div>
    </div>
  );
};

export default Login;
