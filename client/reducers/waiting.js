import {
  SHOW_ERROR,
  REQUEST_JOKES,
  RECEIVE_JOKES } from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_JOKES:
      return true

    case RECEIVE_JOKES:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
