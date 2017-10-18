const express = require('express')
const router = express.Router()
const twiit = require('../controllers/twiitCont')

router.get('/trending', twiit.trendingTwiit)
router.get('/timeline', twiit.timeline)
router.get('/searchTweet/:words', twiit.searchTweet)
router.post('/postTweet', twiit.postTweet)

module.exports = router
