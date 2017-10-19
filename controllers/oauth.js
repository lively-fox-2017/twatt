const oauth = require('oauth')
const Oauth = require('../models/oauth')

module.exports = {
  search: (req, res) => {
    Oauth.search(req.params.search).then((data) => {
      res.json({
        message: "Berhasil Tampil Search",
        data: data
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  recentTweet: (req, res) => {
    Oauth.recentTweet().then((data) => {
      res.json({
        message: "Berhasil Tampil Data Tweet",
        data: data
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  tweet: (req, res) => {
    Oauth.tweet(req.body.tweet).then((data) => {
      res.json({
        message: "Berhasil Post Tweet",
        data: data
      })
    }).catch((reason) => {
      message: reason
    })
  }
}
