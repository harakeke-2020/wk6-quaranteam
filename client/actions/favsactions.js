export const ADD_FAV = 'ADD_FAV'
export const DELETE_FAV = 'DELETE_FAV'

export const addFav = (joke) => {
  return {
    type: ADD_FAV,
    joke
  }
}

export const deleteFav = fav => {
  return {
    type: DELETE_FAV,
    id: fav.id
  }
}
