var express = require('express');
var router = express.Router();
const twattControll = require('../controllers/twitt')



router.get('/trendworld', twattControll.getTrendWorld)

router.get('/trendjkt', twattControll.getTrendJKT)

router.get('/recent', twattControll.recent)

router.post('/search' , twattControll.searchtweet)

router.post('/searchgeo' , twattControll.placenear)

router.post('/status' , twattControll.doTweet)


module.exports = router;
