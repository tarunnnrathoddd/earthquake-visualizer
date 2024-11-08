// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EarthquakeDetailsPage from './pages/EarthquakeDetailsPage';

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/earthquake/:id" element={<EarthquakeDetailsPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
