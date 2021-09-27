import React from 'react';

import './PrincipalSlide.css';

const ActorPanel = ({ data }) => {
  const [Image, setImage] = React.useState('');

  const renderActor = () => (
    <div className="MovieMiniPanelBackground" style={{ backgroundImage: `url(${Image.url})` }}>
      <div className="MovieMiniPanel" style={{ alignItems: 'flex-end' }}>
        <h3>{data ? data.name : 'Actor'}</h3>
      </div>
    </div>
  );

  const obtainData = async () => {
    const actorDataImages = await fetch(`https://api.themoviedb.org/3/person/${data.id}/images?api_key=f081f7e3f9b83f6f07044d72afe3f9df&language=en-US`);
    const actorData = await actorDataImages.json();
    try {
      const image = await fetch(`https://image.tmdb.org/t/p/original${actorData.profiles[0].file_path}`);
      const actorImage = await image;
      setImage(actorImage);
    } catch {
      setImage(undefined);
    }
  };

  React.useEffect(() => {
    obtainData();
  }, []);

  return (
    <>
      {
      Image ? (
        renderActor()
      ) : (
        <div />
      )
    }
    </>
  );
};

export default ActorPanel;
