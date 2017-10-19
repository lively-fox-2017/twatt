const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


const twatt = require('./routes/twatt')

app.use('/twatt', twatt)   

app.listen(3000,(err)=>{
    if(!err) console.log('TWATT 3000')
})

module.exports = app