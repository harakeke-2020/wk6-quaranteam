import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadJokes from './LoadJokes'
import JokesList from './JokesList'
import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>
    {/* <FavoritesList /> */}
    <ErrorMessage />
    <LoadJokes>
      <WaitIndicator />
    </LoadJokes>
    <JokesList />
  </div>
)

export default App
