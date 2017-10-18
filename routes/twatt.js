const express = require('express');
const router = express.Router()
const Twitter = require('../controllers/twatt');

router.get('/', Twitter.getTimeline)
router.get('/trends', Twitter.getTrending)
router.get('/search/:key', Twitter.searchFeature)
router.post('/status', Twitter.postTweet)

module.exports = router;
