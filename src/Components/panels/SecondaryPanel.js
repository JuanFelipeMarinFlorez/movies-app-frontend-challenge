/* eslint-disable linebreak-style */

import React from 'react';
import './PrincipalSlide.css';
import MovieMiniPanel from './MovieMiniPanel';

const SecondaryPanel = () => (
  <div className="secondaryMovieView">
    <div className="movieContainer">
      <MovieMiniPanel />
      <MovieMiniPanel />
      <MovieMiniPanel />
      <MovieMiniPanel />
      <MovieMiniPanel />
      <MovieMiniPanel />
      <MovieMiniPanel />
    </div>
  </div>
);

export default SecondaryPanel;
