import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

// component contains subreddits props which comes from global state
const Subreddit = ({ subreddits }) => {
  function formatTime (unixTimestamp) {
    let date = new Date(unixTimestamp * 1000)
    let formattedTime = date.toString()
    return formattedTime

  }
  return (
    <div>
      {subreddits.map((post, i) =>
        <Post
          key={i}
          title={post.title}
          summary={post.selftext}
          dateTime={formatTime(post.created)}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
