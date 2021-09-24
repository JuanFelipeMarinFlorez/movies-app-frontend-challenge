/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SearchBar.css';

// eslint-disable-next-line react/prop-types
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
    // eslint-disable-next-line max-len
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
            className="text"
            type="button"
            onClick={handleclick}
          >
            Search
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
