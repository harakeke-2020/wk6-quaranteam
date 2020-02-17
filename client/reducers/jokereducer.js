import { RECEIVE_JOKES } from '../actions/jokesActions.js'

const initJokesList = {
  jokes: []
}

function jokes (state = initJokesList.jokes, action) {
  switch (action.type) {
    case RECEIVE_JOKES:
      return action.posts

    default:
      return state
  }
}

export default jokes
