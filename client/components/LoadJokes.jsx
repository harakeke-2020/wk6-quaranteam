import React from 'react'
import { connect } from 'react-redux'
import { apiCall } from '../actions/jokesaction'

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
    this.props.dispatch(apiCall(this.state))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="question-text" htmlFor="type">What type of joke would you like?</label>
          <select className="form-control form-control-sm" defaultValue={this.state.type} id="type" name="type" onChange={this.handleClick} >
            <option value="" disabled selected hidden>Select one</option>
            <option value="general">General</option>
            <option value="programming">Programming</option>
            <option value="knock-knock">Knock-knock</option>
          </select>
          <label className="question-text form" htmlFor="quantity">How many jokes ya want?</label>
          <select className="form-control form-control-sm" defaultValue={this.state.quantity} id="quantity" name="quantity" onChange={this.handleClick} >
            <option value="" disabled selected hidden>Select one</option>
            <option value="one">One</option>
            <option value="ten">Ten</option>
          </select>
          <button className="btn btn-primary btn-block btn-outline-info" type="submit" data-toggle="button" aria-pressed="false" autocomplete="off">Confirm!</button>
        </form>
      </div>
    )
  }
}

// Connect to store
export default connect()(LoadJokes)
