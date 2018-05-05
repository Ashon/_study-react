import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import A from './pages/A';

const Page = (path, linkText, component) => ({
  path, linkText, component
});

const pages = [
  Page('/', 'Home', Home),
  Page('/a', 'A', A)
];

const Navigator = () => (
  <nav>
    <ul>
      {pages.map((page, idx) => <li key={idx}>
        <Link key={idx} to={page.path}>{page.linkText}</Link>
      </li>)}
    </ul>
  </nav>
)

const MainView = () => (
  <Switch>
    {pages.map((page, idx) => <Route key={idx}
      exact={idx === 0 ? true : false}
      path={page.path} component={page.component}
    />)}
  </Switch>
)

export default {
  Navigator,
  MainView,
};
