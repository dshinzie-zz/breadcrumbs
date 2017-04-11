import React, {Component} from 'react'

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <form>
        <label>
          Term:
          <input type="text" value={this.state.value}></input>
        </label>
        <label>
          Price
          <select>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </label>
        <label>
          Radius
          <input type="text" value={this.state.value}></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>

    )
  }
}

export default Input
