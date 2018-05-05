import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

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
    <Route exact path='/' component={() => (
      <div>Main</div>
    )} />
    <Route path='/a' component={() => (
      <div>A</div>
    )} />
  </Switch>
)

export default {
  Navigator,
  MainView,
};
