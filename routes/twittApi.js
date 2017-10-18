const express = require('express')
const router = express.Router()
const Twitter = require('../controllers/oauthTwitter')

router.get('/gettop5', Twitter.topTweets)

router.get('/timeline', Twitter.getTimeline)

router.get('/search/:cari', Twitter.searchTweet)

router.post('/create', Twitter.createTweet)

module.exports = router;
