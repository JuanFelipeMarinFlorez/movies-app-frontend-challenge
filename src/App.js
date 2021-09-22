/* eslint-disable react/react-in-jsx-scope */

import {
  Route, Switch, Redirect,
} from 'react-router-dom';

import './App.css';

import Home from './Views/Home/Home';
import MovieDetails from './Views/MovieDetails/MovieDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movieDetail/" component={MovieDetails} />

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
