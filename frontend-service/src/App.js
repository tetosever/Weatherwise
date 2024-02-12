import React, { Component } from 'react';
import WeatherSearchAP from './WeatherSearchAP';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      location: 'Bergamo'
    };
  }




  render() {
    return (
       <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">WeatherWise</h1>
        </div>
         <div>
     
      <WeatherSearchAP />
    </div>
        

      </div>
      
     
    );
  }
}
export default App;
