import { combineReducers } from 'redux'
import waiting from './waiting'
import jokes from './jokes'

export default combineReducers({
  waiting,
  jokes
})
