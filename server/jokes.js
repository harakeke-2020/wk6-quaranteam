const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

// GET ONE RANDOM JOKE
//params would be '/random_joke' or '/random_ten'
router.get('/:random', (req, res) => {
  request
    .get(`https://official-joke-api.appspot.com/${req.params.random}`)
    .then(res => {
      res.json(res.body)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET 10 RANDOM JOKES
router.get('/randomJokes', (req, res) => {
  request
    .get('https://official-joke-api.appspot.com/random_ten')
    .then(result => {
      res.json(result)
    })
    .catch()
})

// GRAB JOKES BY TYPE (GENERAL/PROGRAMMING)
router.get('jokes/:type', (req, res) => {
  request
    .get(`https://official-joke-api.appspot.com/jokes/${req.params.type}/ten`)
    .then()
    .catch()
})

module.exports = router
