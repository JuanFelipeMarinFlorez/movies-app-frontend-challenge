/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router';

import { useHistory } from 'react-router-dom';
import TopMenuWithoutSearch from '../../Components/TopMenu/TopMenuWithoutSearch';

import '../Home/Home.css';
import './SearchView.css';
import '../../Components/SearchBar/SearchBar.css';
import SearchPanel from '../../Components/panels/SearchPanel';

const SearchView = () => {
  const { movieTitle } = useParams();
  const history = useHistory();

  const handleclick = () => {
    if (document.getElementById('textInput') !== null) {
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
        <div>
          <input type="checkbox" />
          Adulto
        </div>
        <div>
          sort by:
          <input type="checkbox" />
          Title
          <input type="checkbox" />
          Year
        </div>
      </div>
      <div className="contentCenter">
        <SearchPanel />
      </div>

    </>

  );
};

export default SearchView;
