import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllLocations } from '../redux/actions/locationsActions';
import PageHeader from './pageHeader';

const Locations = () => {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.locations.locations);

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(fetchAllLocations());
    }
  }, []);

  if (locations.length === 0) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        Loading locations...
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Locations" />
      <div className="grid-container">
        {locations.map(location => (
          <div key={location.id} className="grid-card">
            <div className="grid-card-title">{location.name}</div>
            <div className="grid-card-row">
              <span className="grid-card-label">Type</span>
              <span className="grid-card-value">{location.type}</span>
            </div>
            <div className="grid-card-row">
              <span className="grid-card-label">Dimension</span>
              <span className="grid-card-value">{location.dimension}</span>
            </div>
            <div className="grid-card-row">
              <span className="grid-card-label">Residents</span>
              <span className="grid-card-badge">{location.residents.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
