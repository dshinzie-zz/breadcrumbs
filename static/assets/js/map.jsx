var React = require('react')
var ReactDOM = require('react-dom')
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    }
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
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
