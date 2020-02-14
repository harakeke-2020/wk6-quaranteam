import React from 'react'
import { connect } from 'react-redux'
import { request } from 'superagent'

const Joke = (props) => {
  console.log('props available to joke component, ', props)

  const clickHandler = (joke) => {
    request
      .post('/api/v2/')
      .send(joke)
  }

  return (
    <div>
      <h1>Joke: </h1>
      <span>{props.joke.setup}</span>
      <span>{props.joke.punchline}</span>
      <button type={'button'} onClick={() => clickHandler(props.joke)}>add to favs</button>
    </div>
  )
}

export default connect()(Joke)
