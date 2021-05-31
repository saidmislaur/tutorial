import React from 'react';
import Profile from './profile';
import IconButton from '@material-ui/core/IconButton';

import '../scss/header.scss';

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header__title">
        <h2>{title}</h2>
      </div>
      <div className="header__profile">
        <Profile
          classnames="header__profile-info--userName"
          userName="Алексей Степанов"
          userStatus="Потом №1, старт обучения 24 ноября"
        />
        <div className="header__profile-exit">
          <IconButton aria-label="delete">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H15V4H6V20H15V18H17V20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z"
                fill="#ADADAD"
              />
              <path
                d="M16.09 15.59L17.5 17L22.5 12L17.5 7L16.09 8.41L18.67 11H9V13H18.67L16.09 15.59Z"
                fill="#ADADAD"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
