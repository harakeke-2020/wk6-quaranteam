import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'

import Joke from './Joke'

// component contains subreddits props which comes from global state
class FavList extends React.Component {
  componentDidMount()

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

export default connect(mapStateToProps)(FavList)