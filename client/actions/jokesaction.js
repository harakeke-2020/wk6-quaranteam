import request from 'superagent'

export const RECEIVE_JOKES = 'RECEIVE_JOKES'
export const REQUEST_JOKES = 'REQUEST_JOKES'

export const requestJokes = () => {
  return {
    type: REQUEST_JOKES
  }
}

export const receiveJokes = (jokes) => {
  return {
    type: RECEIVE_JOKES,
    jokes: jokes.map(joke => {
      return {

      }
    })
  }
}
