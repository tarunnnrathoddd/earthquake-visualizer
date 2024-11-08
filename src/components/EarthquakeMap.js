import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const EarthquakeMap = ({ earthquakes }) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map((quake) => (
        <Marker key={quake.id} position={[quake.geometry.coordinates[1], quake.geometry.coordinates[0]]}>
          <Popup>
            Magnitude: {quake.properties.mag}<br />
            Location: {quake.properties.place}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EarthquakeMap;
