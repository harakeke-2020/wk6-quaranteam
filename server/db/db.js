const config = require('../../knexfile').development
const connection = require('knex')(config)

const getFav = (db = connection) => {
  return db('fav')
    .select
}

const addToFav = (joke, db = connection) => {
  const newJoke = {
    'external_id': joke.id,
    'type': joke.type,
    'setup': joke.setup,
    'punchline': joke.punchline
  }
  return db('fav')
    .insert(newJoke)
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
