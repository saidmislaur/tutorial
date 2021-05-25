import React from 'react';

import Logo from '../assets/img/logo.svg';
import Graphic from '../assets/img/graphic.svg';
import Materials from '../assets/img/materials.svg';
import Youtube from '../assets/img/youtube.svg';
import '../scss/navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <img src={Logo} alt="logo" />
          </li>
          <li>
            <img src={Graphic} alt="" />
          </li>
          <li>
            <img src={Materials} alt="" />
          </li>
          <li>
            <img src={Youtube} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
