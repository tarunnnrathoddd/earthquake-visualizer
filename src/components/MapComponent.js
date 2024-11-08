import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ earthquakes }) => {
  const position = [20, 0]; // Default position, centered on the world

  return (
    <MapContainer center={position} zoom={2} scrollWheelZoom={true} style={{ width: "100%", height: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map((eq) => (
        <Marker
          key={eq.id}
          position={[eq.geometry.coordinates[1], eq.geometry.coordinates[0]]}
          icon={new L.Icon({ iconUrl: 'https://example.com/marker-icon.png' })}>
          <Popup>
            <strong>{eq.properties.place}</strong><br />
            Magnitude: {eq.properties.mag}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
