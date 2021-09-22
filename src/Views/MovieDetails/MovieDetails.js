import React from 'react';

import TopMenu from '../../Components/TopMenu/TopMenu';
import MovieDetailView from '../../Components/MovieDetailView/MovieDetailView';
import './MovieDetails.css';
import SecondaryPanel from '../../Components/panels/SecondaryPanel';

const MovieDetails = () => (
  <>
    <TopMenu />
    <div className="contentCenter">
      <MovieDetailView />
      <SecondaryPanel />

    </div>

  </>

);

export default MovieDetails;
