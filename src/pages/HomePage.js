import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from '../components/MapComponent';
import EarthquakeCard from '../components/EarthquakeCard';
import styles from '../styles/HomePage.module.css';
import Map from '../components/Map';

const HomePage = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
      .then(response => {
        setEarthquakes(response.data.features);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching earthquake data');
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Recent Earthquakes Around the World</h1>
      <MapComponent earthquakes={earthquakes} />
      <div className={styles.earthquakeList}>
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : earthquakes.map((eq) => (
          <EarthquakeCard key={eq.id} earthquake={eq} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
