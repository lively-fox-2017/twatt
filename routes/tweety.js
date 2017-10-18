const TwittyAct = require('../controllers/tweety')
const express = require('express');
const router = express.Router()

router.get('/', TwittyAct.trendsNear)

router.get('/timeline', TwittyAct.timelineMe)

router.get('/search/:search', TwittyAct.search)

router.post('/newtweet', TwittyAct.newTweety)

module.exports = router;