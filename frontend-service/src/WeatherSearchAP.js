import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import StarRatingInput from './StarRatingInput';

function WeatherSearchAP() {
  const [location, setLocation] = useState('Bergamo');
  const [weatherData, setWeatherData] = useState(null);
  const [cityImageURL, setCityImageURL] = useState('');
  const [errorWeather, setErrorWeather] = useState(null);
  const [errorFeedback, setErrorFeedback] = useState(null);
  const [errorCityImage, setErrorCityImage] = useState(null)
  const [errorPlaces, setErrorPlaces] = useState(null);
  const [errorWeatherProbability, setErrorWeatherProbability] = useState(null);
  const [posts, setPosts] = useState([]);
  const [weatherProbability, setWeatherProbability] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [newPointOfInterest, setNewPointOfInterest] = useState({
    userName: '',
    placeName: '',
    city: '',
    description: '',
    rating: 0
  });

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after initial render


    const fetchSuggestions = async () => {
      try {
        //const response = await axios.get(`http://localhost:8080/cities/${location}`);
        const response = ['Bergamo', 'Bormio','Milano','Paris', 'London', 'Tokyo'];
        setSuggestions(response);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      }
    };

      // Handle input change event
  const handleInputChange = (event) => {
    const { value } = event.target;
    setLocation(value); // Update location state with the input value
    fetchSuggestions(value); // Fetch suggestions based on the input value
  };

  const handleSuggestionClick = (value) => {
    setLocation(value); // Set location based on the suggestion clicked
    handleSubmit(); // Fetch weather data based on the selected location
  };


  
  // Fetch weather and point of interest data
  const handleSubmit = async (event = null) => {
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
      const response4 = await axios.get(`http://localhost:8080/feedbacks/citta/${location}`);
      setWeatherProbability(response4.data);
      setErrorWeatherProbability(null);
    } catch (error) {
      console.error('Error fetching weather probability:', error);
      setErrorWeatherProbability('Error fetching probability. Please try again later.');
    }


  
  };

  useEffect(() => {
    handleSubmit();
  }, []); // Empty dependency array ensures this effect runs only once

  
  const handleFeedbackSubmit = async (value) => {
    try {
      console.log({id: location, rating: value});
      const response3 = await axios.post('http://localhost:8080/feedbacks/', {
        id: location,
        rating: value
      });
      setFeedback(response3.data);
      setErrorFeedback(null);
      console.log('Feedback submitted:', response3.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFeedback(null);
      setErrorFeedback('Error submitting feedback. Please try again.');
    }
  };

  const handlePointOfInterestSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userName:newPointOfInterest.userName,
      placeName:newPointOfInterest.placeName,
      city:location,
      description:newPointOfInterest.description,
      rating:Number(newPointOfInterest.rating)
    };
    try {
      console.log(userData);
      const response4 = await axios.post('http://localhost:8080/places/', userData);
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

  const handleRatingChange = (value) => {
    setNewPointOfInterest({
      ...newPointOfInterest,
      rating: value
    });
  };


  return (
    <div>
      <div>
        <div className="form-container" >
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              list="suggestions"
              value={location}
              onChange={handleInputChange}
              onKeyDown={() => handleSuggestionClick(location)}
            />
             <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} onClick={() => handleSuggestionClick(suggestion)}/>
        ))}
      </datalist>
          </label>
          <button className="form-submit" onClick={handleSubmit}>SEARCH</button>  
        </div>
        {errorWeather && <p>{errorWeather}</p>}
        {weatherData && (
          <div className="weather-container">
            <div className="weather-content">
            {currentDateTime.toLocaleString()}
              <h2>{weatherData.data.name}</h2>
              <h3>{Math.round(weatherData.data.main.temp)}°C</h3>
              <p>Humidity: {weatherData.data.main.humidity}%</p>
            </div>
            <div className='weather-icon'>
            {weatherData.data.weather.map((item, index) => (
              <div key={index}>
                <img className="weather-icon" src={"http://openweathermap.org/img/w/" + item.icon + ".png"} alt="Weather Icon" /> 
                <h3>{item.main}</h3>
                <p><b>{item.description}</b></p>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
      <div className='feedback-container'>
        <form>
          <div className="button-container">
            <button className="feedback-button" type="button" onClick={(e) => handleFeedbackSubmit(true)}>
              <span className="icon"><AiFillLike /></span> 
            </button>
            <button className="feedback-button" type="button" onClick={(e) => handleFeedbackSubmit(false)}>
              <span className="icon"><AiFillDislike /></span>
            </button>
          </div>
        </form>
        <div className='probabilty-container'>
        {errorFeedback && <p>{errorFeedback}</p>}
        {feedback && (
          <div>
            <h3>Saved Successfully</h3>
            <p>{feedback.message}</p>
          </div>
        )}
        {errorWeatherProbability && <p>{errorWeatherProbability}</p>}
        {weatherProbability=== 'NaN' ? ( 
            <p>No probability</p> ) : (
              <div>
              <h2>Service Trust: {Math.round(weatherProbability)}%</h2>
              </div>
            )}
        </div>
        </div>
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
                <StarRatingInput value={post.rating} readOnly/>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            ))
          )}

<div>
<div className="card" >
  <div className='card-header'>
     <h3>Add New Point of Interest</h3>
     </div>
     
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
              <StarRatingInput value={newPointOfInterest.rating} onChange={handleRatingChange} />
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
        <button  className="form-submit"type="submit">ADD</button>
      </form>
    </div>
</div>

        </div>
      </div>

    </div>
  );
}

export default WeatherSearchAP;
