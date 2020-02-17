export const ADD_FAV = 'ADD_FAV'
export const DELETE_FAV = 'DELETE_FAV'

export const addFav = (id, type, setup, punchline) => {
  return {
    type: ADD_FAV,
    id,
    genre: type,
    setup,
    punchline
  }
}

export const deleteFav = id => {
  return {
    type: DELETE_FAV,
    id
  }
}
