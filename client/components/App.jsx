import React from 'react'

import LoadJokes from './LoadJokes'
import JokesList from './JokesList'
import FavList from './FavList'
// import WaitIndicator from './WaitIndicator'

const App = (props) => (
  <div className='app'>
    {/* <FavoritesList /> */}
    <LoadJokes />
    <JokesList />
    <FavList />
  </div>
)

export default App
