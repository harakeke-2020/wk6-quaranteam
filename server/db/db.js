const config = require('./knexfile').development
const connection = require('knex')(config)

const getFav = (db = connection) => {
  return db('fav')
    .select
}

const addToFav = (joke, db = connection) => {
  return db('fav')
    .insert(joke)
}

const deleteFromFav = (joke, db = connection) => {
  return db('fav')
    .where('id', joke.id)
    .del()
} 

module.exports = {
  getFav,
  addToFav,
  deleteFromFav
}

