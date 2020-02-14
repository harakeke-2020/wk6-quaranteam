import request from 'superagent'

const serverUrl = 'http://localhost:3000/api/v1/'

export function requestJokes (object) {
  let { type, quantity } = object
  quantity = quantity === 'one' ? quantity = 'random' : quantity
  console.log('api file ', type, quantity)
  return request
    .get(`${serverUrl}${type}/${quantity}`)
    .then(response => {
      console.log(response)
    })
}

// export function appendWidget (widget) {
//   return request
//     .post(widgetUrl)
//     .send(widget)
//     .then(response => response.body)
//   }
