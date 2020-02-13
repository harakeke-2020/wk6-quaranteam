import React from 'react'

import LoadJokes from './LoadJokes'
import JokesList from './JokesList'
// import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>
    {/* <FavoritesList /> */}
    <LoadJokes />
    <JokesList />
  </div>
)

export default App
