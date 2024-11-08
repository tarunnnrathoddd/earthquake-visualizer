import axios from 'axios';

export const fetchEarthquakeData = async () => {
  const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
  return response.data.features;

};
