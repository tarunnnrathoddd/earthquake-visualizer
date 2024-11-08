// src/components/Map.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the earthquake data from the USGS API
    const fetchEarthquakes = async () => {
      try {
        const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
        const data = await response.json();
        setEarthquakes(data.features);
      } catch (error) {
        console.error('Error fetching earthquake data:', error);
      }
    };

    fetchEarthquakes();
  }, []);

  return (
    <MapContainer
      center={[20, 0]} // Default center of the map
      zoom={2} // Default zoom level
      style={{ width: '100%', height: '500px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {earthquakes.map((quake) => {
        const { geometry, properties, id } = quake;
        const [lat, lng] = geometry.coordinates;

        return (
          <Marker
            key={id}
            position={[lat, lng]}
            icon={new L.Icon({ iconUrl: require('../assets/earthquake-icon.png') })}
          >
            <Popup>
              <h3>{properties.place}</h3>
              <p>Magnitude: {properties.mag}</p>
              <button
                onClick={() => navigate(`/earthquake/${id}`)}
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Details
              </button>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;

