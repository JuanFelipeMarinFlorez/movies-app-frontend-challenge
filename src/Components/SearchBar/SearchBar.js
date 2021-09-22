/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SearchBar.css';

// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder, data }) {
  const [filterData, setFilterData] = useState([]);
  let text = null;
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    text = searchWord;
    // eslint-disable-next-line max-len
    const newFilter = data.filter((value) => value.name.toLowerCase().includes(searchWord.toLowerCase()));
    if (searchWord === '') {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  return (
    <div className="SearchBarDesign">
      <h5 className="text"> Find a Movie</h5>
      <div className="searchArea">
        <input type="textInput" placeholder={placeholder} onChange={handleFilter} id="textInput" />
        <div className="searchButton">
          {
            document.getElementById('textInput') !== null ? (
              <Link to={`/search/${document.getElementById('textInput').value}`} style={{ color: '#9BA4B4' }}>
                <h6 className="text">Search</h6>
              </Link>
            ) : (
              <h6 className="text">Search</h6>
            )
          }

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
