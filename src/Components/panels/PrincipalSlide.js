import React from 'react';
import './PrincipalSlide.css';
import MoviePanel from './MoviePanel';

const PrincipalSlide = () => {
  const [filterData, setFilterData] = React.useState([]);

  const obteinData = async () => {
    const data = await fetch('http://3.134.101.122:8081/movies/?page=0&limit=5');
    const movies = await data.json();
    setFilterData(movies);
  };

  React.useEffect(() => {
    obteinData();
  }, []);

  return (
    <div className="PrincipalMovieView">
      <div className="movieContainer">
        {filterData.map((value) => (
          <MoviePanel title={value.originalTitle} id={value.id} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default PrincipalSlide;
