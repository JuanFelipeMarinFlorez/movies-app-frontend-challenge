/* eslint-disable react/prop-types */
import React from 'react';
import './PrincipalSlide.css';

const ActorPanel = ({ data }) => (
  <div className="MovieMiniPanel">
    <h3>{data ? data.name : 'Actor'}</h3>
  </div>
);

export default ActorPanel;
