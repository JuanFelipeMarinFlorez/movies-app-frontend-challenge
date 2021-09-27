/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
import { useParams } from 'react-router';
import React, { useState } from 'react';

import { useHistory, Link } from 'react-router-dom';
import TopMenuWithoutSearch from '../../Components/TopMenu/TopMenuWithoutSearch';

import '../Home/Home.css';
import './SearchView.css';
import '../../Components/SearchBar/SearchBar.css';
import '../../Components/panels/PrincipalSlide.css';

const SearchView = () => {
  const { movieTitle } = useParams();
  const history = useHistory();
  const [filterData, setFilterData] = useState([]);

  const obteinData = async () => {
    const searchResult = await fetch(`http://3.134.101.122:8081/movies/title/?title=${movieTitle}&page=0`);
    const movies = await searchResult.json();
    setFilterData(movies);
  };

  React.useEffect(() => {
    obteinData();
  }, []);

  const handleclick = () => {
    if (document.getElementById('textInput') !== null) {
      obteinData();
      history.push(`/search/${document.getElementById('textInput').value}`);
    }
    return null;
  };

  return (
    <>
      <TopMenuWithoutSearch />
      <div className="contentCenter">
        <h1 style={{ margin: '5px' }}>{`Search: ${movieTitle}` }</h1>
        <div className="searchArea2">
          <input type="textInput" className="inputText" id="textInput" />
          <div className="searchButton">
            <button
              className="text"
              type="button"
              onClick={handleclick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="contentCenter">
        <div className="secondaryMovieView">
          <div className="movieSearchContainer">
            { filterData.length !== 0 && (
              <>
                {filterData.slice(0, 50).map((value) => (
                  <Link
                    to={`/movieDetail/${value.id}`}
                    style={{
                      color: '#f1f6f9', textDecoration: 'none', width: '100%', height: '400px',
                    }}
                    key={value.id}
                  >
                    <div className="MovieSearchPanel">
                      <div className="infoSearch">
                        <h3>{value.originalTitle}</h3>
                        <h3>{value.overView.split('.')[0]}</h3>
                        <h3>{value.year}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchView;
