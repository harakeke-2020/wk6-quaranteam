import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

// component contains subreddits props which comes from global state
class JokesList extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        {
        }
        <h2>joke</h2>
        {/* {props.jokes.map((joke, i) =>
          <Joke
            key={i}
            joke={joke}
          />
        )} */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps)(JokesList)
