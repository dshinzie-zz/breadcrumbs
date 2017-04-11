import React, {Component} from 'react'

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      price: '',
      radius: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    if(e.target.id == 'term'){ this.setState({term: e.target.value}); }
    if(e.target.id == 'price'){ this.setState({price: e.target.value}); }
    if(e.target.id == 'radius'){ this.setState({radius: e.target.value}); }
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Term:
          <input id="term" type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <label>
          Price
          <select id="price" onChange={this.handleChange}>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </label>
        <label>
          Radius
          <input id="radius" type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>

    )
  }
}

export default Input
