/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router';
import ActorPanel from './ActorPanel';
import './PrincipalSlide.css';

const CastPanel = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = React.useState(null);
  const renderCast = (data) => (data.cast?.map((value, key) => (
    value ? (
      <ActorPanel data={value} key={value.id} />
    ) : (
      <div />
    )
  )));
  // https://www.themoviedb.org/t/p/
  const obtainData = async () => {
    console.log(id);
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f081f7e3f9b83f6f07044d72afe3f9df&language=en-US`);
    // console.log(data);
    // console.log(' before to parse');
    const movie = await data.json();
    // console.log('to parse');
    // console.error(movie);
    setMovieData(movie);
  };

  React.useEffect(() => {
    obtainData();
  }, []);
  return (
    <div>
      <div className="secondaryMovieView" style={{ height: '450px' }}>
        <h2 style={{ margin: '0px' }}>Cast</h2>
        <div className="movieContainer">
          {
          movieData ? (
            renderCast(movieData)
          ) : (
            <div />
          )

        }
        </div>
      </div>
    </div>
  );
};

export default CastPanel;
