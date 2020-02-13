const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  // request
  //   .get(`www.jokes.com`)
  //   .end((err, result) => {
  //     if (err) {
  //       res.status(500).send(err.message)
  //     } else {
  //       console.log(result.body)
  res.json({ 'joke': 'knock knock' })
  // }
  // })
})

module.exports = router
