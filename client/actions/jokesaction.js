import request from 'superagent'

const serverUrl = 'http://localhost:3000/api/v1/'

export const RECEIVE_JOKES = 'RECEIVE_JOKES'

export const receiveJokes = (jokes) => {
  return {
    type: RECEIVE_JOKES,
    jokes: jokes
  }
}

export function apiCall (object) {
  let { type, quantity } = object
  quantity = quantity === 'one' ? quantity = 'random' : quantity
  return (dispatch) => {
    return request
      .get(`${serverUrl}${type}/${quantity}`)
      .then(response => {
        dispatch(receiveJokes(response.body))
      })
  }
}
