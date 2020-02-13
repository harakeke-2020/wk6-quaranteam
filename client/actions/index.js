import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
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
    // jokes: jokes.map(joke => joke)
    jokes
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchJokes () {
  // Action creator that returns a function instead of an action.
  return (dispatch) => {
    // Perform requestJOKES method. Returns {type: REQUEST_JOKES}
    dispatch(requestJokes())

    // Make a request to the server using superagent
    return request
      .get(`/api/v1/`)
      .then(res => {
        console.log(res)
        dispatch(receiveJokes(res.body.joke))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
