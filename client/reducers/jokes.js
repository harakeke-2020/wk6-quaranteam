import { RECEIVE_JOKES } from '../actions'

function jokes (state = [], action) {
  switch (action.type) {
    case RECEIVE_JOKES:
      return action.jokes
    default:
      return state
  }
}

export default jokes
