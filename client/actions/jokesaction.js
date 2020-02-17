import request from 'superagent'

const serverUrl = 'http://localhost:3000/api/v1/'

export const RECEIVE_JOKES = 'RECEIVE_JOKES'
export const REQUEST_JOKES = 'REQUEST_JOKES'
export const SHOW_ERROR = 'SHOW_ERROR'

export const requestJokes = () => {
  return {
    type: REQUEST_JOKES
  }
}

export const receiveJokes = (jokes) => {
  return {
    type: RECEIVE_JOKES,
    jokes: jokes
  }
}

export function apiCall (object) {
  console.log('apicall ', object)
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
