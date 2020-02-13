import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

// component contains subreddits props which comes from global state
const JokesList = (props) => {
  return (
    <div>
      {props.jokes.map((joke, i) =>
        <Joke
          key={i}
          joke={joke}
        />
      )}
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
)(JokesList)
