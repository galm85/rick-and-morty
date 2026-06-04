import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ handleShow }) => {
  return (
    <nav className="topbar">
      <Link to="/" className="topbar-logo">
        Rick<span>&</span>Morty
      </Link>
      <div className="topbar-nav">
        <Link to="/characters">Characters</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/episodes">Episodes</Link>
      </div>
      <button className="hamburger" onClick={handleShow} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Topbar;
