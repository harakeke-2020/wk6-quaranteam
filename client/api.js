import request from 'superagent'

const serverUrl = 'http://localhost:3000/api/v1/'

export function requestJokes (object) {
  const { type, quantity } = object
  return request
    .get(`${serverUrl}/${type}/${quantity}`)
    .then(response => response.body)
}

// export function appendWidget (widget) {
//   return request
//     .post(widgetUrl)
//     .send(widget)
//     .then(response => response.body)
//   }