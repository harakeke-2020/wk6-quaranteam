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
    jokes
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }