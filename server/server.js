const path = require('path')
const express = require('express')

const jokes = require('./routes/jokes')
const fav = require('./routes/fav')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', jokes)
server.use('/api/v2', fav)

module.exports = server
