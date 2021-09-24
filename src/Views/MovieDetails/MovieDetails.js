/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router';

import TopMenu from '../../Components/TopMenu/TopMenu';
import MovieDetailView from '../../Components/MovieDetailView/MovieDetailView';
import './MovieDetails.css';
import CastPanel from '../../Components/panels/CastPanel';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = React.useState([]);

  const obteinData = async () => {
    const data = await fetch(`http://3.134.101.122:8081/movie/${id}`);
    const movie = await data.json();
    setMovieData(movie);
  };

  React.useEffect(() => {
    obteinData();
  }, []);

  return (
    <>
      <TopMenu />
      <div className="contentCenterMovie">
        <MovieDetailView data={movieData} />
        <CastPanel />

      </div>

    </>

  );
};

export default MovieDetails;
