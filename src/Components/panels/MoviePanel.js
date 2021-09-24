/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './PrincipalSlide.css';

// eslint-disable-next-line no-unused-vars
const MoviePanel = ({ title, id }) => (
  <div className="MoviePanelBackground">
    <div className="MoviePanel">
      <Link to={`/movieDetail/${id}`} style={{ color: '#f1f6f9', textDecoration: 'none' }}>
        <h1>{title}</h1>
      </Link>
    </div>
  </div>

);

export default MoviePanel;
