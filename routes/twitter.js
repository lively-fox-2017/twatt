const express = require('express');
const router = express.Router();
const twitter = require('../controller/twitter');

router.get('/trending',twitter.getTrending);
router.get('/last_time_line',twitter.getLastTimeLine);
router.get('/search/:input',twitter.searchTimeLine);
router.post('/post_new_tweet',twitter.postNewPost);

module.exports = router;
