import React from 'react';
import Avatar from '../assets/img/avatar.png';

import '../scss/profile.scss';

const Profile = ({ userName, userStatus, classnames }) => {
  return (
    <div className="profile">
      <div className="header__profile-avatar">
        <img src={Avatar} alt="ava" />
      </div>
      <div className="header__profile-info">
        <div className={classnames}>
          <span>{userName}</span>
        </div>
        <div className="header__profile-info--status">
          <span>{userStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
