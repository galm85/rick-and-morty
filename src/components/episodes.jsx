import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllEpisodes } from '../redux/actions/episodesActions';
import PageHeader from './pageHeader';

const Episodes = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episodes.episodes);

  useEffect(() => {
    if (episodes.length === 0) {
      dispatch(fetchAllEpisodes());
    }
  }, []);

  if (episodes.length === 0) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        Loading episodes...
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Episodes" />
      <div className="grid-container">
        {episodes.map(episode => (
          <div key={episode.id} className="grid-card">
            <div className="grid-card-title">{episode.name}</div>
            <div className="grid-card-row">
              <span className="grid-card-label">Episode</span>
              <span className="grid-card-badge episode-badge">{episode.episode}</span>
            </div>
            <div className="grid-card-row">
              <span className="grid-card-label">Air Date</span>
              <span className="grid-card-value">{episode.air_date}</span>
            </div>
            <div className="grid-card-row">
              <span className="grid-card-label">Characters</span>
              <span className="grid-card-badge episode-badge">{episode.characters.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
