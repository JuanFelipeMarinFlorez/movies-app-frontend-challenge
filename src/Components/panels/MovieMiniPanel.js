/* eslint-disable react/prop-types */
import React from 'react';
import './PrincipalSlide.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
const MovieMiniPanel = ({ title, id }) => {
  const [Image, setImage] = React.useState('');

  const obtainData = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f081f7e3f9b83f6f07044d72afe3f9df&language=en-US`);
    const movieData = await data.json();
    const image = await fetch(`https://image.tmdb.org/t/p/original${movieData.poster_path}`);
    const movieImage = await image;
    console.log(movieImage);
    setImage(movieImage);
  };

  React.useEffect(() => {
    obtainData();
  }, []);
  return (
    <div className="MovieMiniPanelBackground" style={{ backgroundImage: `url(${Image.url})` }}>
      <div className="MovieMiniPanel">
        <Link to={`/movieDetail/${id}`} style={{ color: '#f1f6f9', textDecoration: 'none' }}>
          <h3>{title}</h3>
        </Link>
      </div>
    </div>

  );
};

export default MovieMiniPanel;
