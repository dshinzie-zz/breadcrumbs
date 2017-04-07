import React, {Component} from 'react'
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {lat: 39.6645260, lng: -104.9825840},
      zoom: 11,
      locations: null
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ locations: nextProps.locations });
  }

  componentWillMount(){
    this.getAllLocations();
  }

  getAllLocations(){
    if(this.state.locations != null){
      return this.state.locations.map(function(location){
        React.createElement(AnyReactComponent, {
          lat: location.coordinates.latitude,
          lng: location.coordinates.longitude,
          text: location.name
        });
      });
    } else {
      return null;
    }
  }

  render() {
    var locations = this.getAllLocations();
    console.log(locations);

    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyD0-DcpN0mv2nxOOLUK9PzG0AwjVDcyxZU'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={38.6645260}
            lng={-105.9825840}
            text={'Test'}
          />
        {locations}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
