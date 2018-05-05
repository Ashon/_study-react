import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

export default MainView;
