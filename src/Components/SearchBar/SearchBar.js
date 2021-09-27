/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { useHistory, Link } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ placeholder }) {
  const [filterData, setFilterData] = useState([]);
  const history = useHistory();

  const obtainData = async (title) => {
    const searchResult = await fetch(`http://3.134.101.122:8081/movies/title/?title=${title}&page=0`);
    const movies = await searchResult.json();
    setFilterData(movies);
  };

  const handleclick = () => {
    if (document.getElementById('textInput') !== null) {
      history.push(`/search/${document.getElementById('textInput').value}`);
    }
    return null;
  };

  const handleFilter = (event) => {
    obtainData(event.target.value);
    const searchWord = event.target.value;
    if (filterData !== null) {
      const newFilter = filterData.filter((value) => value.originalTitle.toLowerCase().includes(searchWord.toLowerCase()));
      if (searchWord === '') {
        setFilterData([]);
      } else {
        setFilterData(newFilter);
      }
    }
  };
  return (
    <div className="SearchBarDesign">
      <h5 className="text"> Find a Movie</h5>
      <div className="searchArea">
        <input type="textInput" placeholder={placeholder} onChange={handleFilter} id="textInput" />
        <div className="searchButton">
          <button
            className="searchButton"
            type="button"
            onClick={handleclick}
          >
            <h4 className="text">Search</h4>
          </button>

        </div>
      </div>
      {filterData.length !== 0 && (
        <div className="result">
          {filterData.slice(0, 10).map((value) => (
            <Link to={`/movieDetail/${value.id}`} style={{ color: '#14274E', textDecoration: 'none' }} key={value.id}>
              <a className="movieName" key={value.id}>
                {value.originalTitle}
              </a>
            </Link>

          ))}
        </div>
      )}

    </div>
  );
}
export default SearchBar;

// en A poner el link a info pelicula
