import { ADD_FAV } from '../actions/addFav'
import { DELETE_FAV } from '../actions/deleteFav'

const initialFavList = []

function favList (state = initialFavList, action) {
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
        return [...state, { id: action.id, genre: action.genre, setup: action.setup, punchline: action.punchline }]
      // }
    case DELETE_FAV:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

export default favList
