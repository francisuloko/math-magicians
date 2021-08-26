import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="site-title">
      <Link to="/home" className="navLinkTitle">
        Math Magicians
      </Link>
    </h1>
    <ul className="navMenu">
      <li className="navItem">
        <Link to="/" className="navLink">
          Home
        </Link>
      </li>
      <li className="navItem">
        <Link to="/calculator" className="navLink">
          Calculator
        </Link>
      </li>
      <li className="navItem">
        <Link to="/quote" className="navLink">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
