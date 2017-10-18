const express = require('express');
const router = express.Router();

const TwitterAPIController = require('../../controllers/TwitterAPIController');

// GET /api/twitter/
router.get('/', TwitterAPIController.index);

// POST /api/twitter/
router.post('/', TwitterAPIController.tweet);

// GET /api/twitter/search?q=:keyword
router.get('/search', TwitterAPIController.search);

// GET /api/twitter/timeline
router.get('/timeline', TwitterAPIController.timeline);


module.exports = router;
