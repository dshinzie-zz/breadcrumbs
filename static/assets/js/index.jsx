var React = require('react')
var ReactDOM = require('react-dom')
import GoogleMap from './map.jsx'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <div style={{width: '100%', height: '400px'}}>
          <GoogleMap/>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('container'))
