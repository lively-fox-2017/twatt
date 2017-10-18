const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const index = require('./routes/index');
const twitter = require('./routes/twitter');

app.use('/',index);
app.use('/twitter',twitter);


app.listen(3000,()=>{
  console.log('app running at port 3000');
})
