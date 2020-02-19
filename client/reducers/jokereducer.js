import { RECEIVE_JOKES } from '../actions/jokesaction.js'

const initJokesList = []

function jokes (state = initJokesList, action) {
  switch (action.type) {
    case RECEIVE_JOKES:
      return action.jokes

    default:
      return state
  }
}

export default jokes
