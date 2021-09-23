/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './MovieDetailView.css';

const MovieDetailView = ({ data }) => (
  <div className="MovieContainer">
    <div className="MovieInfoContainer">
      <div>
        <h1>{data.originalTitle}</h1>
        <h5>{data.overView}
        </h5>
        <div className="details">
          <h4>{`Year: ${data.year}`}</h4>
          <h4>{`Original Language: ${data.originalLanguage}`}</h4>
        </div>
        <div className="details">
          <h4>{`Popularity: ${data.popularity}`}</h4>
          <h4>{`Running time: ${data.runtime}`}</h4>
        </div>
      </div>

    </div>
  </div>

);

export default MovieDetailView;
