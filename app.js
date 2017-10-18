'use strict'

require('dotenv').config();

const express = require('express');
const app = express();

const search = require('./routes/search');
const timeline = require('./routes/timeline');

app.use('/search', search);
app.use('/timeline', timeline);

app.listen(3000);