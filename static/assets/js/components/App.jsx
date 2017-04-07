import React, {Component} from 'react'

import GoogleMap from './Map.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: {}
    }
  }

  getLocations() {
    $.ajax({
      url: "./api/v1/locations",
      type: "GET",
      cache: false,
      success: function(data){
        this.setState({ locations: data });
      }.bind(this),
      error: function(data){
        console.log(data);
      }.bind(this),
      complete: function(){
        console.log("Retrieved all locations:")
        console.log(this.state.locations);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getLocations()
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <GoogleMap/>
      </div>
    )
  }
}

export default App
