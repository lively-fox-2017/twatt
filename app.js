'use strict'

require('dotenv').config();

const express = require('express');
const app = express();

const search = require('./routes/search');

app.use('/search', search);

app.listen(3000);