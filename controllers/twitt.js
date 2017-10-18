const twitt = require('../models/twitt')

class twattControll{

  static getTrendWorld(req,res){
    twitt.getTrend(1).then(data=>{
      res.json(200,{msg:'trend dunia' , trend:data})
    })
  }

  static getTrendJKT(req,res){
    twitt.getTrend(1047378).then(data=>{
      res.json(200,{msg:'trend jakarta' , trend:data})
    })
  }

  static recent(req,res){
    twitt.recent().then(data=>{
      res.json(200,{msg:'recent tweet' , recent:data})
    })
  }

  static doTweet(req,res){
    twitt.doTweet(req.body.status).then(data=>{
      res.json(200,{msg:'tweet' , tweet:data})
    })
  }

  static searchtweet(req,res){
    twitt.searchtweet(req.body.search).then(data=>{
      res.json(200,{msg:'search result' , data:data})
    })
  }

  static placenear(req,res){
    twitt.searchtweet(req.body.search).then(data=>{
      res.json(200,{msg:'search result' , data:data})
    })
  }

}

module.exports = twattControll;
