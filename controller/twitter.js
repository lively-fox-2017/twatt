const twitter = require('../models/twitter');
class Search {
  constructor() {

  }
  static getTrending(req,res){
    twitter.getTrending()
    .then(data=>{
      // console.log(data);
      // res.render('index',{title:'Simple OAuth Apps',data:JSON.parse(trending)})
      res.send(data);
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static getLastTimeLine(req,res){
    twitter.getLastTimeLine()
    .then(data=>{
      // console.log(data);
      // res.render('index',{title:'Simple OAuth Apps',data:JSON.parse(trending)})
      res.send(data);
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static searchTimeLine(req,res){
    twitter.getLastTimeLine(req.params.input)
    .then(data=>{
      // console.log(data);
      // res.render('index',{title:'Simple OAuth Apps',data:JSON.parse(data)})
      res.send(data);
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static postNewPost(req,res){
    // console.log('==========',req.body);
    twitter.postNewPost(req.body.tweet)
    .then(data=>{
      // console.log(data);
      // res.render('index',{title:'Simple OAuth Apps',data:JSON.parse(data)})
      res.send(data);
    })
    .catch(err=>{
      // console.log(err);
      res.send(err);
    })
  }
}

module.exports = Search
