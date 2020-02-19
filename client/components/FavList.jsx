import React from 'react'
import { connect } from 'react-redux'

import Joke from './Joke'

// component contains subreddits props which comes from global state
const FavList = props => {
  return (
    <div>
      <h2>Favs</h2>
      {
        props.favs.map(joke =>
          (<Joke fromFavs={true} key={joke.id} joke={joke}/>)
        )
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    favs: state.favorites
  }
}

export default connect(mapStateToProps)(FavList)
