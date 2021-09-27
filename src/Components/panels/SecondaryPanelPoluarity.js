import React from 'react';

import './PrincipalSlide.css';
import MovieMiniPanel from './MovieMiniPanel';

const SecondaryPanelPopularity = () => {
  const [filterData, setFilterData] = React.useState([]);

  const obteinData = async () => {
    const data = await fetch('http://3.134.101.122:8081/movies/sortedByPopularity/?page=0');
    const movies = await data.json();
    setFilterData(movies);
  };

  React.useEffect(() => {
    obteinData();
  }, []);

  return (
    <div className="secondaryMovieView">
      <div className="movieContainer">
        {filterData.map((value) => (

          <MovieMiniPanel title={value.originalTitle} id={value.id} key={value.id} />

        ))}
      </div>
    </div>
  );
};
export default SecondaryPanelPopularity;
