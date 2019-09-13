import React, {Component}  from "react"

class BobaForm extends Component {
  constructor(){
    super()
    this.state = {
      location: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async handleChange (e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  async handleSubmit (e){
    e.preventDefault()
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="location"
        value={this.state.location}
        onChange={this.handleChange}>
        </input>
        <button>Search</button>
      </form>
    )
  }
}
export default BobaForm
