import React from 'react';
import './App.scss';
import Header from './components/Header'
import Home from './pages/Home'
import Search from './pages/Search'
import TopMovies from './pages/TopMovies'
import Movie from './pages/Movie'
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/bulma-theming/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:movieName" component={Movie} />
      <Route path="/search" component={Search} />
      <Route path="/top-movies" component={TopMovies} />
    </Switch>
  </Router>
  );
}

export default App;
