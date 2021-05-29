import React from 'react';

import { ButtonBase } from '@material-ui/core';

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
            <ButtonBase>
              <img alt="logo" src={Logo} />
            </ButtonBase>
          </li>
          <li>
            <ButtonBase>
              <img alt="logo" src={Graphic} />
            </ButtonBase>
          </li>
          <li>
            <ButtonBase>
              <img alt="logo" src={Materials} />
            </ButtonBase>
          </li>
          <li>
            <ButtonBase>
              <img alt="logo" src={Youtube} />
            </ButtonBase>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
