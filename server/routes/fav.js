const express = require('express')
// const request = require('superagent')

const router = express.Router()

const db = require('../db/db')

router.use(express.json())

router.get('/', (req, res) => {
  db.getFav()
    .then(res => {
      res.json(res)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addToFav(req.body)
    .then(() => {
      db.getFav()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/', (req, res) => {
  db.deleteFromFav(req.body)
    .then(() => {
      db.getFav()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
