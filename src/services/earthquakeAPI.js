import axios from 'axios';

export const fetchEarthquakes = async () => {
  try {
    const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
    return response.data.features;
  } catch (error) {
    throw new Error('Failed to fetch earthquake data');
  }
};
