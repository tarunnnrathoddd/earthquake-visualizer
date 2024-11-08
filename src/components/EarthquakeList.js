import React from 'react';

const EarthquakeList = ({ earthquakes }) => {
  return (
    <div className="earthquake-list">
      <h2>Recent Earthquakes</h2>
      <ul>
        {earthquakes.map((quake) => (
          <li key={quake.id}>
            <strong>Magnitude:</strong> {quake.properties.mag} - <strong>Location:</strong> {quake.properties.place}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarthquakeList;
