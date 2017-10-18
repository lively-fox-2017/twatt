let express=require('express')
const router=express.Router()
const dataTwatt=require('../controllers/twatt')

router.get('/',dataTwatt.viewData)

router.get('/viewtimeline',dataTwatt.viewTimeline)

router.post('/poststatus',dataTwatt.postStatus)

router.get('/search/:words',dataTwatt.searchFeature)

module.exports = router;
