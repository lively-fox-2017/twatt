const twatt = require('../models/twatt');


class Twitter {
  static getTrending(req, res){
    twatt.getTrending()
    .then(dataTrending=>{
      res.send(dataTrending)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static getTimeline(req, res){
    twatt.getTimeline()
    .then(dataTimeline=>{
      res.send(dataTimeline)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static searchFeature(req, res){
    twatt.searchFeature(req.params)
    .then(dataSearch=>{
      res.send(dataSearch)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static postTweet(req, res){
    twatt.postTweet(req.body)
    .then(dataStatus=>{
      res.send(dataStatus)
    })
    .catch(err=>{
      res.send(err)
    })
  }

}

module.exports = Twitter;
