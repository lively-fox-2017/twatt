const express = require('express');
let router = express.Router();
const ControllerTwitterApi = require('../controllers/twitterApi');

router.get('/getalltimeline', ControllerTwitterApi.getAllTimeline);
router.post('/search', ControllerTwitterApi.search);
router.post('/tweet', ControllerTwitterApi.tweet)

module.exports = router;
