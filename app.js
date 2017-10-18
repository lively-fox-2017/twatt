const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let trends = require('./routes/trends')
let statuses = require('./routes/statuses')
let search = require('./routes/search')

app.use('/trends', trends)
app.use('/statuses', statuses)
app.use('/search', search)
app.listen(3000, () => {
	console.log('Ready on port 3000')
})