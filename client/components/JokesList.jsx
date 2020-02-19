import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

class JokesList extends React.Component {
  render () {
    return (
      <div>
        {
        }
        <h2>joke</h2>
        {this.props.jokes.map((joke, i) =>
          <Joke
            key={i}
            joke={joke}
          />
        )}
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
