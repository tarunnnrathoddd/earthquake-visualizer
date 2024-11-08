/* src/components/EarthquakeCard.js */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/EarthquakeCard.module.css';

const EarthquakeCard = ({ earthquake }) => {
  return (
    <div className={styles.card}>
      <h3>{earthquake.properties.place}</h3>
      <p>Magnitude: {earthquake.properties.mag}</p>
      <Link to={`/earthquake/${earthquake.id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default EarthquakeCard;
