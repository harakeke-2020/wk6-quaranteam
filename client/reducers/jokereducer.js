import { RECEIVE_JOKES } from '../actions/jokesActions.js'

function jokes (state = [], action) {
  switch (action.type) {
    case RECEIVE_JOKES:
      return action.posts

    default:
      return state
  }
}

export default jokes
