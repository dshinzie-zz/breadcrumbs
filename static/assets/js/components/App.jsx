import React, {Component} from 'react'
import GoogleMap from './Map.jsx'
import Input from './Input.jsx'

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
      }.bind(this)
    });
  }

  componentWillMount(){
    this.getLocations()
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <GoogleMap locations={this.state.locations}/>
        <Input/>
      </div>
    )
  }
}

export default App
