import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">
              <ButtonBase>
                <img alt="logo" src={Logo} />
              </ButtonBase>
            </Link>
          </li>
          <li>
            <ButtonBase>
              <img alt="logo" src={Graphic} />
            </ButtonBase>
          </li>
          <li>
            <Link to="/materials">
              <ButtonBase>
                <img alt="logo" src={Materials} />
              </ButtonBase>
            </Link>
          </li>
          <li>
            <Link to="/lessons">
              <ButtonBase>
                <img alt="logo" src={Youtube} />
              </ButtonBase>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
