const express = require('express')
const router = express.Router()
const twitterController = require('../controllers/twitterController')


router.get('/timeline', twitterController.timeLine)
router.get('/search/:cari', twitterController.search)
router.get('/timelineUser', twitterController.timelineUser)
router.post('/posttwit', twitterController.post)

module.exports = router
