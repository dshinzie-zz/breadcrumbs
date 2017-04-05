import React, {Component} from 'react'

import GoogleMap from './Map.jsx'

class Application extends Component {
  getLocations() {
    console.log("Test")
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

export default Application
