import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/" className='navbar-linkstyle' >Home</Link>
      </li>
      <li>
        <Link to="/about" className='navbar-linkstyle'>About</Link>
      </li>
      <li>
        <Link to="/blog" className='navbar-linkstyle'>Blog</Link>
      </li>
    </ul>
  </nav>
);

export default MainNav;