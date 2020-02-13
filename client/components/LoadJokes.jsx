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
          <select id="type" name="type">
            <option value="" disabled selected hidden>Select one</option>
            <option onClick={this.handleClick} value="general">General</option>
            <option onClick={this.handleClick} value="programming">Ten</option>
            <option onClick={this.handleClick} value="knock-knock">Knock-knock</option>
          </select>
          {/* <button type="submit">Confirm!</button>
        </form>
        <form onSubmit={this.handleSubmit}> */}
          <label htmlFor="quantity">How many jokes ya want?</label>
          <select id="quantity" name="quantity">
            <option onClick={this.handleClick} value="" disabled selected hidden>Select one</option>
            <option onClick={this.handleClick} value="one">One</option>
            <option onClick={this.handleClick} value="ten">Ten</option>
          </select>
          {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
          <button type="submit" >Confirm!</button>
        </form>
      </div>
    )
  }
}

// Connect to store
export default LoadJokes
