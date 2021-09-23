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
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder, data }) {
  const [filterData, setFilterData] = useState([]);
  const history = useHistory();

  const handleclick = () => {
    if (document.getElementById('textInput') !== null) {
      history.push(`/search/${document.getElementById('textInput').value}`);
    }
    return null;
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    // eslint-disable-next-line max-len
    if (data !== null) {
      const newFilter = data.filter((value) => value.originalTitle.toLowerCase().includes(searchWord.toLowerCase()));
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
          {filterData.slice(0, 10).map((value, key) => (
            <a className="movieName">
              {value.name}
            </a>
          ))}
        </div>
      )}

    </div>
  );
}
export default SearchBar;

// en A poner el link a info pelicula
