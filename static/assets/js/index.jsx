var React = require('react')
var ReactDOM = require('react-dom')
import GoogleMap from './map.jsx'

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <GoogleMap/>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))
