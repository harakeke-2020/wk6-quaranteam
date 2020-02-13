import React from 'react'

import Joke from './Joke'

// component contains subreddits props which comes from global state
const JokesList = (props) => {
  return (
    <div>
      {/* {props.jokes.map((joke, i) => */}
      <Joke
        // key={i}
        // joke={joke}
      />
      {/* )} */}
    </div>
  )
}

export default JokesList
