import React from 'react'

const Joke = (props) => {
  console.log('props available to joke component, ', props)

  return (<div>
    <h1>Joke: </h1>
    <span>{props.joke.joke}</span>
  </div>
  )
}

export default Joke
