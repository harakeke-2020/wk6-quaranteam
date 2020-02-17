import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

// component contains subreddits props which comes from global state
class FavList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      favs: []
    }
  }

  // componentDidMount () {
  //   return request
  //     .get('api/v2/')
  //     .then(result => {
  //       console.log(result.body)
  //       this.setState({
  //         favs: result.body
  //       })
  //     })
  // }

  render () {
    return (
      <div>
        <h2>Favs</h2>
        {
          this.state.favs.map(joke =>
            <div key={joke.id}>
              <h1>Joke: </h1>
              <span>{joke.setup}</span>
              <span>{joke.punchline}</span>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect()(FavList)
