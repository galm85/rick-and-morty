import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCharacters } from '../redux/actions/charactersActions';
import { Link } from 'react-router-dom';
import PageHeader from './pageHeader';

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.characters);

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(fetchAllCharacters());
    }
  }, []);

  if (characters.length === 0) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        Loading characters...
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Characters" />
      <div className="characters-container">
        {characters.map(char => (
          <Link to={`/characters/${char.id}`} key={char.id}>
            <div className="character-card">
              <img src={char.image} alt={char.name} />
              <div className="character-card-info">
                <div className="character-card-name">{char.name}</div>
                <div className="character-card-species">{char.species}</div>
                <div className={`status-badge status-${char.status.toLowerCase()}`}>
                  <span className="status-dot"></span>
                  {char.status}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;
