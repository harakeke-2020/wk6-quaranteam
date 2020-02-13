import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

// component contains subreddits props which comes from global state
const Subreddit = (props) => {
  return (
    <div>
      {/* {jokes.map((joke, i) =>
        <Joke
          key={i}
          title={joke.title}
        />
      )} */}
      <Joke joke={props.jokes} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
