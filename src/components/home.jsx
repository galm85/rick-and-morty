import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <img
        src="/images/rickAndMortyLogo.png"
        alt="Rick and Morty"
        className="home-logo"
      />
      <p className="home-subtitle">Explore the multiverse — characters, locations &amp; episodes</p>
      <div className="home-cards">
        <Link to="/characters">
          <div className="home-card">
            <span className="home-card-icon">👥</span>
            <div className="home-card-label">Characters</div>
          </div>
        </Link>
        <Link to="/locations">
          <div className="home-card">
            <span className="home-card-icon">🌍</span>
            <div className="home-card-label">Locations</div>
          </div>
        </Link>
        <Link to="/episodes">
          <div className="home-card">
            <span className="home-card-icon">📺</span>
            <div className="home-card-label">Episodes</div>
          </div>
        </Link>
      </div>
      <p className="home-credit">by Gal Mizrahi</p>
    </div>
  );
};

export default Home;
