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
    this.setState({
      locations: nextProps.locations
    })
  }

  render() {
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

        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
