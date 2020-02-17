import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

class JokesList extends React.Component {
  render () {
    console.log(this.props)
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
    jokes: state
  }
}

export default connect(mapStateToProps)(JokesList)
