var React = require('react')
var ReactDOM = require('react-dom')
import Map from './map.jsx'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <Map/>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('container'))
