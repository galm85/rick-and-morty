import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCharacters } from '../redux/actions/charactersActions';

const SingleCharacter = ({ match, history }) => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.characters);
  const id = parseInt(match.params.id);
  const char = characters.find(c => c.id === id);

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  if (!char) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        Loading...
      </div>
    );
  }

  return (
    <div className="single-char-container">
      <button className="back-btn" onClick={history.goBack}>
        ← Back
      </button>
      <div className="single-char-card">
        <img src={char.image} alt={char.name} className="single-char-image" />
        <div className="single-char-info">
          <h1 className="single-char-name">{char.name}</h1>
          <div className={`status-badge single-char-status status-${char.status.toLowerCase()}`}>
            <span className="status-dot"></span>
            {char.status} — {char.species}
          </div>
          <div className="info-item">
            <div className="info-label">Gender</div>
            <div className="info-value">{char.gender}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Origin</div>
            <div className="info-value">{char.origin.name}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Last Known Location</div>
            <div className="info-value">{char.location.name}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Episodes</div>
            <div className="info-value">{char.episode.length} episodes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
