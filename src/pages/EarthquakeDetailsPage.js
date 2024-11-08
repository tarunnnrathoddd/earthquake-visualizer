import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/EarthquakeDetails.module.css';

const EarthquakeDetailsPage = () => {
  const { id } = useParams();
  const [earthquake, setEarthquake] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/${id}.geojson`)
      .then(response => {
        setEarthquake(response.data.properties);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching earthquake details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.detailsTitle}>Earthquake Details</h2>
      <p className={styles.detailItem}><strong>Magnitude:</strong> {earthquake.mag}</p>
      <p className={styles.detailItem}><strong>Location:</strong> {earthquake.place}</p>
      <p className={styles.detailItem}><strong>Time:</strong> {new Date(earthquake.time).toLocaleString()}</p>
      <Link to="/" className={styles.backButton}>Back to Map</Link>
    </div>
  );
};

export default EarthquakeDetailsPage;
