import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ show, handleShow }) => {
  return (
    <>
      <div className={`sidenav-overlay ${show ? 'open' : ''}`} onClick={handleShow} />
      <div className={`sidenav ${show ? 'open' : ''}`}>
        <button className="sidenav-close" onClick={handleShow}>✕</button>
        <Link to="/characters" onClick={handleShow}>👥 Characters</Link>
        <Link to="/locations" onClick={handleShow}>🌍 Locations</Link>
        <Link to="/episodes" onClick={handleShow}>📺 Episodes</Link>
      </div>
    </>
  );
};

export default SideNav;
