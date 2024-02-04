import React, { useState } from 'react';
import axios from 'axios';

function WeatherSearch() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://58bded02-48d4-433c-9a95-02bbfad03104.mock.pstmn.io/meteo/${location}/0`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setError('Error fetching weather data. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>Weather Information for {weatherData.location}</h2>
          <p>Current Temperature: {weatherData.current_temperature} {weatherData.temperature_unit}</p>
          <p>Timestamp: {weatherData.timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherSearch;

