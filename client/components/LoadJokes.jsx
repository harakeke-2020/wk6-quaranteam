import React from 'react'
import { connect } from 'react-redux'
import { fetchJokes } from '../actions'

const LoadJokes = (props) => {
  function handleSubmit (e) {
    e.preventDefault()
    // console.log(e.target.value)
    props.dispatch(fetchJokes())
  }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <button type="submit" >Fetch posts of a subreddit!</button>
      </form> */}
      <button type="submit" onClick={handleSubmit}>Get 10 jokes</button>
      {props.children}
    </div>
  )
}

// Connect to store
export default connect()(LoadJokes)
