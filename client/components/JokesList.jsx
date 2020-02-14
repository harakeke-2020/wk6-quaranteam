import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

// component contains subreddits props which comes from global state
const JokesList = (props) => {
  console.log(props)

  return (
    <div>
      <h2>joke</h2>
      {/* {props.map((joke, i) =>
        <Joke
          key={i}
          joke={joke}
        />
      )} */}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    jokes: state
  }
}

export default connect(mapStateToProps)(JokesList)
