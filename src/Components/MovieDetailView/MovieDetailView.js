/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './MovieDetailView.css';

const MovieDetailView = () => (
  <div className="MovieContainer">
    <div className="MovieInfoContainer">
      <div>
        <h1>MOVIE TITLE</h1>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the  standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </h5>
        <div className="details">
          <h4>Year: YYYY</h4>
          <h4>Language: ABCDS</h4>
        </div>
        <div className="details">
          <h4>Popularity: 0.0</h4>
          <h4>Country: Colombia</h4>
        </div>
      </div>

    </div>
  </div>

);

export default MovieDetailView;
