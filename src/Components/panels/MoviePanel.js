import React from 'react';
import { Link } from 'react-router-dom';

import './PrincipalSlide.css';

const MoviePanel = ({ title, id }) => {
  const [Image, setImage] = React.useState('');

  const obtainData = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f081f7e3f9b83f6f07044d72afe3f9df&language=en-US`);
    const movieData = await data.json();
    const image = await fetch(`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`);
    const movieImage = await image;
    setImage(movieImage);
  };

  React.useEffect(() => {
    obtainData();
  }, []);

  return (
    <div className="MoviePanelBackground" style={{ backgroundImage: `url(${Image.url})` }}>
      <div className="MoviePanel">
        <Link to={`/movieDetail/${id}`} style={{ color: '#f1f6f9', textDecoration: 'none' }}>
          <h1>{title}</h1>
        </Link>
      </div>
    </div>
  );
};

export default MoviePanel;
