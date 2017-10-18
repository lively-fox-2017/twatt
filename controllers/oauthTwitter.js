const Twitter = require('../models/twittApi');

class Api {
  constructor() {

  }

  static topTweets(req,res) {
    Twitter.topTweets()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static getTimeline(req,res) {
    Twitter.getTimeline()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static searchTweet(req,res) {
    Twitter.searchTweet(req.params)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createTweet(req,res) {
    Twitter.createTweet(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

}


module.exports = Api
