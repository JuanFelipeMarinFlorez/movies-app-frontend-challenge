/* eslint-disable linebreak-style */
/* eslint-disable react/style-prop-object */

import React from 'react';

import TopMenu from '../../Components/TopMenu/TopMenu';
import PrincipalSlide from '../../Components/panels/PrincipalSlide';
import SecondaryPanel from '../../Components/panels/SecondaryPanel';
import './Home.css';

const Home = () => (
  <div className="App">
    <TopMenu />
    <div className="contentCenter">
      <PrincipalSlide />
      <h2 className="titles">Most Popular</h2>
      <SecondaryPanel />
      <h2 className="titles">Lastest movies</h2>
      <SecondaryPanel />
    </div>
  </div>
);

export default Home;
