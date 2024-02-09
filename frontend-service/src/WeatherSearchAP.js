import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

function WeatherSearchAP() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorWeather, setErrorWeather] = useState(null);
  const [errorFeedback, setErrorFeedback] = useState(null)
  const [errorPlaces, setErrorPlaces] = useState(null);
  const [errorWeatherProbability, setErrorWeatherProbability] = useState(null);
  const [posts, setPosts] = useState([]);
  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);
  const [response3, setResponse3] = useState(null);
  const [weatherProbability, setWeatherProbability] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [newPointOfInterest, setNewPointOfInterest] = useState({
    commentId: '',
    userName: '',
    placeName: '',
    city: '',
    description: '',
    rating: ''
  });

  // Fetch weather and point of interest data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response1 = await axios.get(`http://localhost:8080/meteo/${location}`);
      setWeatherData(response1.data);
      setErrorWeather(null);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setErrorWeather('Error fetching weather. Please try again later.');
      setWeatherData(null);
    }

    try {
      const response2 = await axios.get(`http://localhost:8080/places/citta/${location}`);
      setPosts(response2.data);
      setErrorPlaces(null);
    } catch (error) {
      console.error('Error fetching point of interest:', error);
      setErrorPlaces('Error fetching location data. Please try again later.');
      setPosts([]);
    }

    try {
      const response4 = await axios.get(`http://localhost:8080/feedbacks/${location}`);
      setWeatherProbability(response4.data);
      setErrorWeatherProbability(null);
    } catch (error) {
      console.error('Error fetching weather probability:', error);
      setErrorWeatherProbability('Error fetching probability. Please try again later.');
    }
  };
  
  const handleFeedbackSubmit = async (value) => {
    try {
      const response3 = await axios.post('YOUR_POST_URL_HERE', {
        id: location,
        rating: value
      });
      setFeedback(response3.data);
      //setErrorFeedback(null);
      console.log('Feedback submitted:', response3.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFeedback(null);
      //setErrorFeedback('Error submitting feedback. Please try again.');
    }
  };

  const handlePointOfInterestSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      commentId:101,
      userName:newPointOfInterest.userName,
      placeName:newPointOfInterest.placeName,
      city:location,
      description:newPointOfInterest.description,
      rating:Number(newPointOfInterest.rating)
    };
    try {
      console.log(userData);
      const response4 = await axios.post('http://localhost:8080/places/', userData, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
      console.log('Point of interest added:', response4.data);
      // Optionally, you can update state or perform other actions after successful submission
    } catch (error) {
      console.error('Error adding point of interest:', error);
      // Handle error
    }
  };


  const handleChangePointOfInterest = (e) => {
    const value = e.target.value;
    setNewPointOfInterest({
      ...newPointOfInterest,
      [e.target.name]: value
    });
  };


  return (
    <div>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <button className="form-submit" type="submit">Search</button>
        </form>
        {errorWeather && <p>{errorWeather}</p>}
        {weatherData && (
          <div className="weather-container">
            
            <div className="weather-content">
              <h1>meteo</h1>
              <h2>{weatherData.data.name}</h2>
              <p>Temperature: {weatherData.data.main.temp}</p>
              <p>Humidity: {weatherData.data.main.humidity}</p>
            </div>
            {weatherData.data.weather.map((item, index) => (
              <div key={index}>
                <img className="weather-icon" src={"http://openweathermap.org/img/w/" + item.icon + ".png"} alt="Weather Icon" /> 
                <p>Weather: {item.main}</p>
                <p>Description: {item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <form>
          <div className="button-container">
            <button className="feedback-button" type="button" onClick={(e) => handleFeedbackSubmit(1)}>
              <span className="icon"><AiFillLike /></span> 
            </button>
            <button className="feedback-button" type="button" onClick={(e) => handleFeedbackSubmit(0)}>
              <span className="icon"><AiFillDislike /></span>
            </button>
          </div>
        </form>
        {errorFeedback && <p>{errorFeedback}</p>}
        {feedback && (
          <div>
            <h3>Saved Successfully</h3>
            <p>{feedback.message}</p>
          </div>
        )}
      </div>
      {errorWeatherProbability && <p>{errorWeatherProbability}</p>}
        {weatherProbability && (
          <div>
              <h2>Service Trust</h2>
              <h2>{weatherProbability.data}</h2>
          </div>
        )}
      <div>
        <h2>Point of Interest</h2>
        <div className="card-container">
          {posts.length === 0 ? (
            <p>No point of Interest Available</p>
          ) : (
            posts.map((post) => (
              <div className="card" key={post.id}>
                <div className="card-header">
                   <h3>{post.placeName}</h3>
                  <p className="card-text">{post.userName}</p>
                </div>
                <div className="card-body">
                  <p className="card-text">{post.rating}</p>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            ))
          )}

<div>
<div className="card" >
      <h3>Add New Point of Interest</h3>
      <form onSubmit={handlePointOfInterestSubmit}>
        <label>
          Place Name:
          <input
           className="form-input"
            type="text"
            name="placeName"
            value={newPointOfInterest.placeName}
            onChange={handleChangePointOfInterest}
          />
        </label>
        <label>
          User Name:
          <input
           className="form-input"
            type="text"
            name="userName"
            value={newPointOfInterest.userName}
            onChange={handleChangePointOfInterest}
          />
        </label>
        <label>
          Rating:
          <input
            className="form-input"
            type="text"
            name="rating"
            value={newPointOfInterest.rating}
            onChange={handleChangePointOfInterest}
          />
        </label>
        <label>
          Description:
          <textarea
           className="form-input"
            name="description"
            value={newPointOfInterest.description}
            onChange={handleChangePointOfInterest}
          />
        </label>
        <button  className="form-submit"type="submit">Add Point of Interest</button>
      </form>
    </div>
</div>

        </div>
      </div>

    </div>
  );
}

export default WeatherSearchAP;
