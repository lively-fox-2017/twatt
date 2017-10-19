'use strict';
const TwitterAPI = require('../models/twitterApi');

class Controller{
  static getAllTimeline(req,res){
    let result={
      message:"",
      data:{}
    }
    TwitterAPI.getAllTimeline().then(timeline=>{
      result.message = 'Berhasil'
      result.data = timeline
      res.status(200).json(result)
    }).catch((err) => {
      //console.log(err);
      result.message = 'Internal server error'
      res.status(500).json(result)
    })
  }

  static search(req, res){
    let result = {
      message:'',
      data:{}
    }
    TwitterAPI.getSearchResult(req.body.search).then(searchResult=>{
      result.message = 'Berhasil'
      result.data = searchResult
      res.status(200).json(result)
    }).catch(err=>{
      result.message = 'Internal server error'
      res.status(500).json(result)
    })
  }

  static tweet(req, res){
    let result = {
      message:'',
      data:{}
    }
    TwitterAPI.postTweet(req.body.status).then(s=>{
      result.message = 'Berhasil'
      result.data = s;
      res.status(200).json(result)
    }).catch(err=>{
      result.message = 'Internal server error'
      res.status(500).json(result)
    })
  }
}

module.exports = Controller;
