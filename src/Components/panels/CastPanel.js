import React from 'react';
import ActorPanel from './ActorPanel';

import './PrincipalSlide.css';

const CastPanel = () => (
  <div>
    <div className="secondaryMovieView" style={{ height: '450px' }}>
      <h2 style={{ margin: '0px' }}>Cast</h2>
      <div className="movieContainer">
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />
        <ActorPanel />

      </div>
    </div>
  </div>
);

export default CastPanel;
