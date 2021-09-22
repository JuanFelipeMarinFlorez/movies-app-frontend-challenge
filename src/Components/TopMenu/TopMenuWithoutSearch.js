import React from 'react';

import { Link } from 'react-router-dom';

import './TopMenu.css';
import logo from './images/popcorn.png';

const TopMenuWithoutSearch = () => (
  <header className="menu-header">
    <div className="flex">
      <div className="name">
        <Link to="/">
          <img src={logo} className="menu-logo" alt="logo" />
        </Link>
        <h5 className="App-title">Movie App</h5>
        <h6 className="App-title">By Endava</h6>
      </div>
    </div>

  </header>

);

export default TopMenuWithoutSearch;
