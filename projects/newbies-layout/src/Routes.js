import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import A from './pages/A';

const Navigator = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/a">A</Link></li>
    </ul>
  </nav>
)

const MainView = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/a' component={A} />
  </Switch>
)

export default {
  Navigator,
  MainView,
};
