const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const twiit = require('./routers/twiit')

app.use('/twiit', twiit)

app.listen(3000, function () {
  console.log('run at port 3000')
})
