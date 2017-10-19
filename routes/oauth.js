const express = require('express')
const router = express.Router()
const oauth = require('../controllers/oauth')

router.get('/search/:search', oauth.search);

router.get('/recent', oauth.recentTweet);

router.post('/tweet', oauth.tweet)

module.exports = router
