const express = require('express')
const twitter = require('../controllers/twatt');
const router = express.Router()


router.get('/trend', twitter.trend)
router.get('/timeline', twitter.timeline)
router.get('/home', twitter.userTimeline)
router.get('/search', twitter.search)
router.post('/post', twitter.post)
// router.put('/')
// router.delete('/')


module.exports = router