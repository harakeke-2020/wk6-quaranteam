import { ADD_FAV, DELETE_FAV } from '../actions/favsactions'

const initState = []

function favList (state = initState, action) {
  switch (action.type) {
    case ADD_FAV:
      // const ternary = !action.quantity ? action.quantity = 1 : action.quantity
      // let check = false
      // const checkedArr = state.map(item => {
      //   console.log('state in condition of addtofavs ', state)
      //   if (action.id === item.id) {
      //     return check = true
      //   } else {
      //     return item
      //   }
      // })
      // console.log('state outside condition in addtofavs ', state)
      // if (check) {
      //   return checkedArr
      // } else {
      return [ ...state, action.joke ]
      // }
    case DELETE_FAV:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

export default favList
