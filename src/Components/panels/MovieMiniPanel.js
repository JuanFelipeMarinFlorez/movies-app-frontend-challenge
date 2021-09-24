/* eslint-disable react/prop-types */
import React from 'react';
import './PrincipalSlide.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
const MovieMiniPanel = ({ title, id }) => (
  <div className="MovieMiniPanel">
    <Link to={`/movieDetail/${id}`} style={{ color: '#f1f6f9', textDecoration: 'none' }}>
      <h3>{title}</h3>
    </Link>
  </div>
);

export default MovieMiniPanel;
