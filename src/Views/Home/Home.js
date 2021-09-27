import React from 'react';

import TopMenu from '../../Components/TopMenu/TopMenu';
import PrincipalSlide from '../../Components/panels/PrincipalSlide';
import SecondaryPanelPopularity from '../../Components/panels/SecondaryPanelPoluarity';
import SecondaryPanelLatest from '../../Components/panels/SecondaryPanelLatest';

import './Home.css';

const Home = () => (
  <div className="App">
    <TopMenu />
    <div className="contentCenter">
      <PrincipalSlide />
      <h2 className="titles">Most Popular</h2>
      <SecondaryPanelPopularity />
      <h2 className="titles">Latest movies</h2>
      <SecondaryPanelLatest />
    </div>
  </div>
);

export default Home;
