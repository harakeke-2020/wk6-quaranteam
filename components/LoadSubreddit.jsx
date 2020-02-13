import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const LoadSubreddit = ({ children, dispatch }) => {
  function handleSubmit (e) {
    e.preventDefault()
    console.log(e.target[0].value)
    dispatch(fetchPosts(e.target[0].value.toString()))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <button type="submit" >Fetch posts of a subreddit!</button>
      </form>
      {children}
    </div>
  )
}

// Connect to store
export default connect()(LoadSubreddit)
