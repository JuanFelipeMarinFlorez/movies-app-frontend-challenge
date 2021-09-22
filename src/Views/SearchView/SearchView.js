/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router';

import TopMenuWithoutSearch from '../../Components/TopMenu/TopMenuWithoutSearch';

import '../Home/Home.css';
import './SearchView.css';
// eslint-disable-next-line react/prop-types
const SearchView = () => {
  const { movieTitle } = useParams();
  return (
    <>
      <TopMenuWithoutSearch />
      <div className="contentCenter">
        <input className="inputText" placeholder={movieTitle} />
        <h1>{ movieTitle}</h1>
      </div>

    </>

  );
};

export default SearchView;
