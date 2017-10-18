const express = require('express')
const router = express.Router()
const controller = require('../controllers/statuses')
router.get('/home_timeline', controller.home_timeline)
router.post('/update', controller.update)
module.exports = router
