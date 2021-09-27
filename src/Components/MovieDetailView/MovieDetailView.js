/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './MovieDetailView.css';

const MovieDetailView = ({ data }) => {
  const [Image, setImage] = React.useState('');
  const [movieVideoData, setMovieVideoData] = React.useState('');
  const { id } = useParams();

  const renderVideoLink = (videoData) => (videoData.results?.map((value) => (
    value ? (
      value.type === 'Trailer' && value.key !== null ? (
        <>
          <Link to={{ pathname: `https://www.youtube.com/watch?v=${value.key}` }} target="_blank" style={{ color: '#ffffff' }}>
            <h6>
              video Trailer
            </h6>
          </Link>
        </>
      ) : (
        <div />
      )

    ) : (
      <div />
    )
  )));

  const obtainData = async () => {
    const MovieDataJson = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f081f7e3f9b83f6f07044d72afe3f9df&language=en-US`);
    const movieInfo = await MovieDataJson.json();
    const image = await fetch(`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`);
    const movieImage = await image;
    setImage(movieImage);

    try {
      const movieVideo = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f081f7e3f9b83f6f07044d72afe3f9df&language=en-US`);
      const videoInfo = await movieVideo.json();
      setMovieVideoData(videoInfo);
    } catch {
      setMovieVideoData(undefined);
    }
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
          {
            movieVideoData ? (
              renderVideoLink(movieVideoData)
            ) : (
              <div />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MovieDetailView;
