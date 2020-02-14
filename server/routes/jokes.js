const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

// GET ONE RANDOM JOKE
// params would be '/random_joke' or '/random_ten'
router.get('/:random', (req, res) => {
  request
    .get(`https://official-joke-api.appspot.com/${req.params.random}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

// GRAB JOKES BY TYPE (GENERAL/PROGRAMMING)
router.get('/:type/:number', (req, res) => {
  request
    .get(`https://official-joke-api.appspot.com/jokes/${req.params.type}/${req.params.number}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
