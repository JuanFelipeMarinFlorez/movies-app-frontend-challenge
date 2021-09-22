/* eslint-disable react/react-in-jsx-scope */

import {
  Route, Switch, Redirect,
} from 'react-router-dom';

import './App.css';

import Home from './Views/Home/Home';
import MovieDetails from './Views/MovieDetails/MovieDetails';
import SearchView from './Views/SearchView/SearchView';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movieDetail/" component={MovieDetails} />
      <Route exact path="/search/:movieTitle" component={SearchView} />

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
