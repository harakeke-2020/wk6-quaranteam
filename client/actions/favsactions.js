export const ADD_FAV = 'ADD_FAV'
export const DELETE_FAV = 'DELETE_FAV'

export const addFav = (id, type, setup, punchline) => {
  const genre = [type]
  console.log('genre ', type)
  console.log('addfav action ', id, type, setup, punchline)
  return {
    type: ADD_FAV,
    id,
    genre,
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
