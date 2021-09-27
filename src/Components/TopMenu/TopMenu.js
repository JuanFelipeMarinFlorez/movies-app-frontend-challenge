import React from 'react';

import { Link } from 'react-router-dom';

import './TopMenu.css';
import logo from './images/popcorn.png';
import SearchBar from '../SearchBar/SearchBar';

const TopMenu = () => (
  <header className="menu-header">
    <div className="flex">
      <div className="name">
        <Link to="/">
          <img src={logo} className="menu-logo" alt="logo" />
        </Link>
        <h5 className="App-title">Movie App</h5>
      </div>
      <div>
        <SearchBar placeholder="Enter a movie name" data={null} />
      </div>
    </div>

  </header>

);

export default TopMenu;
