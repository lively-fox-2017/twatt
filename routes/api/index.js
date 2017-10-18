const express = require('express');
const router = express.Router();

const twitter = require('./twitter');

router.use('/twitter', twitter);

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'api index, see available APIs on README'
  });
});

module.exports = router;
