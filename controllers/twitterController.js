const Twitter = require('../models/twitter')
require('dotenv').config()

module.exports = {
  timeLine: (req, res) => {
    Twitter.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.TOKEN, //test user token
    process.env.TOKEN_USER, //test user secret
    function (e, data, response){
      if (e) console.error(e);
      res.send(JSON.parse(data))
    });
  },
  search: (req, res) => {
    Twitter.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.TOKEN, //test user token
    process.env.TOKEN_USER, //test user secret
    function (e, data, response){
      if (e) console.error(e);
      res.send(JSON.parse(data))
    });
  }
}
