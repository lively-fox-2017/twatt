const express = require('express')
const router = express.Router()
const controller = require('../controllers/search')
router.get('/tweets/:words', controller.tweets)
module.exports = router
