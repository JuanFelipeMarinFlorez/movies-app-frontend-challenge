/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams } from 'react-router';

import './MovieDetailView.css';

const MovieDetailView = ({ data }) => {
  const [Image, setImage] = React.useState('');
  const { id } = useParams();
  const obtainData = async () => {
    const MovieDataJson = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f081f7e3f9b83f6f07044d72afe3f9df&language=en-US`);
    const movieData = await MovieDataJson.json();
    const image = await fetch(`https://image.tmdb.org/t/p/original${movieData.poster_path}`);
    const movieImage = await image;
    console.log(movieImage);
    setImage(movieImage);
  };

  React.useEffect(() => {
    obtainData();
  }, []);
  return (
    <div className="MovieContainer" style={{ backgroundImage: `url(${Image.url})` }}>
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
};

export default MovieDetailView;
