import { combineReducers } from 'redux'
import favorites from './favorites'
import jokes from './jokereducer'

export default combineReducers({
  jokes,
  favorites
})
