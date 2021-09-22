/* eslint-disable linebreak-style */
import React from 'react';

// import { Link } from 'react-router-dom';

import './TopMenu.css';
import Data from './Data.json';
import logo from './images/popcorn.png';
import SearchBar from '../SearchBar/SearchBar';

const TopMenu = () => (
  <header className="menu-header">
    <div className="flex">
      <div className="name">
        <img src={logo} className="menu-logo" alt="logo" />
        <h5 className="App-title">Movie App</h5>
        <h6 className="App-title">By Endava</h6>
      </div>
      <div>
        <SearchBar placeholder="Enter a movie name" data={Data} />
      </div>
    </div>

  </header>

);

export default TopMenu;

/*
<nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/messages">Find</Link>
          </li>
        </ul>
      </nav>
*/
