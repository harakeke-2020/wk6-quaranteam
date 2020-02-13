import { combineReducers } from 'redux'
import favorites from './favorites'
import jokes from './jokes'

export default combineReducers({
  jokes,
  favorites
})
