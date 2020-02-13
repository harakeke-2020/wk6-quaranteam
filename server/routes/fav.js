const express = require('express')
// const request = require('superagent')

const router = express.Router()

const db = require('../db/db')

router.use(express.json())

router.get('/', (req, res) => {
  db.getFav()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      errHandler(res, err, 'could not get favourites')
    })
})

router.post('/', (req, res) => {
  db.addToFav(req.body)
    .then(() => {
      res.send('successfully added to favourites!')
    })
    .catch(err => {
      errHandler(res, err, 'could not add to favourites')
    })
})

router.delete('/', (req, res) => {
  db.deleteFromFav(req.body)
    .then(() => {
      db.getFav()
    })
    .catch(err => {
      errHandler(res, err, 'could not delete joke')
    })
})

const errHandler = (res, err, text) => {
  console.error(err.message)
  res.status(500)
    .send(`DATABASE ERROR: ${text}`)
}

module.exports = router
