/* eslint-disable react/react-in-jsx-scope */

import {
  Route, Switch, Redirect,
} from 'react-router-dom';

import './App.css';

import Home from './Views/Home/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
