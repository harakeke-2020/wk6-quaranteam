import React from 'react'
import { requestJokes } from '../api'

class LoadJokes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: '',
      quantity: ''
    }
  }

  handleClick = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
    requestJokes(this.state)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="type">What type of joke would you like?</label>
          <select defaultValue={this.state.type} id="type" name="type" onChange={this.handleClick} >
            <option value="" disabled selected hidden>Select one</option>
            <option value="general">General</option>
            <option value="programming">Ten</option>
            <option value="knock-knock">Knock-knock</option>
          </select>
          <label htmlFor="quantity">How many jokes ya want?</label>
          <select defaultValue={this.state.quantity} id="quantity" name="quantity" onChange={this.handleClick} >
            <option value="" disabled selected hidden>Select one</option>
            <option value="one">One</option>
            <option value="ten">Ten</option>
          </select>
          <button type="submit" >Confirm!</button>
        </form>
      </div>
    )
  }
}

// Connect to store
export default LoadJokes
