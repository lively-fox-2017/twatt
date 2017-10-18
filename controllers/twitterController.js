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
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.cari}`,
    process.env.TOKEN, //test user token
    process.env.TOKEN_USER, //test user secret
    function (e, data, response){
      if (e) console.error(e);
      res.send(JSON.parse(data))
    });
  },
  timelineUser: (req, res) => {
    Twitter.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json',
    process.env.TOKEN, //test user token
    process.env.TOKEN_USER, //test user secret
    function (e, data, response){
      if (e) console.error(e);
      res.send(JSON.parse(data))
    });
  },
  post: (req, res) => {
    Twitter.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
    process.env.TOKEN, //test user token
    process.env.TOKEN_USER, //test user secret
    {status: req.body.status},
    function (e, data, response){
      if (e) console.error(e);
      res.send(JSON.parse(data))
    });
  }
}
