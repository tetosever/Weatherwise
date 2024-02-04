import React, { Component } from 'react';
import WeatherSearch from './WeatherSearch';
import FeedbackForm from './FeedbackForm';
import  InterestPoint from './InterestPoint';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


  render() {
    return (
       <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">WeatherWise</h1>
        </div>
         <div>
      <h1>Search by City</h1>
      <WeatherSearch />
    </div>
        <div className="App">
            <FeedbackForm />
        </div>
        <h1>Punti di Interesse</h1>
         <InterestPoint />
      </div>
      
     
    );
  }
}
export default App;
