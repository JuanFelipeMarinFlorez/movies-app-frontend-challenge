/* eslint-disable linebreak-style */

import React from 'react';
import './PrincipalSlide.css';
import MoviePanel from './MoviePanel';

const PrincipalSlide = () => (
  <div className="PrincipalMovieView">
    <div className="lateralButtons">{'<'}</div>
    <div className="movieContainer">
      <MoviePanel />
      <MoviePanel />
      <MoviePanel />
      <MoviePanel />
    </div>

    <div className="lateralButtons">{'>'}</div>
  </div>
);

export default PrincipalSlide;
