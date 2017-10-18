const express = require('express')
const router = express.Router()
const twitterController = require('../controllers/twitterController')


router.get('/timeline', twitterController.timeLine)
router.get('/search/:id', twitterController.search)

module.exports = router
