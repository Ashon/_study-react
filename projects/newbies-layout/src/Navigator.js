import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/a">A</Link></li>
    </ul>
  </nav>
)

export default Navigator
