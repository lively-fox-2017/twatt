const dataTwatt=require('../models/twatt')
var OAuth = require('oauth');
require('dotenv').config()

let viewData=('/twatt',function(req,res){
      dataTwatt.get(
      'https://api.twitter.com/1.1/trends/place.json?id=1047378',
      process.env.ACC_TOKEN, //test user token
      process.env.ACC_SECRET, //test user secret
      function (e, data, response){
        if (e){
          console.error(e);

        } else{
          console.log(require('util').inspect(data));
          res.send(JSON.parse(data))
        }

      });
})

let viewTimeline=('/twatt',function(req,res){
  dataTwatt.get(
  'https://api.twitter.com/1.1/statuses/home_timeline.json',
  process.env.ACC_TOKEN,
  process.env.ACC_SECRET,
  function (e , data , response) {
    if(e){
      console.error(e);
    }else{
      console.log(require('util').inspect(data));
      res.send(JSON.parse(data))
    }
  }
  )
})

let postStatus=('/twatt',function(req,res){
  dataTwatt.post(
    'https://api.twitter.com/1.1/statuses/update.json',
    process.env.ACC_TOKEN,
    process.env.ACC_SECRET,
    {status:req.body.status},  // <==  ini utuk menuils status di twitter
  function(error, data) {
    if(error) console.log(require('sys').inspect(error))
    else console.log(data)
  }
  )
})

let searchFeature=('/twatt',function(req,res){
  console.log(req.params.words);
  dataTwatt.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.words}`,
    process.env.ACC_TOKEN, //test user token
    process.env.ACC_SECRET,
  function(e, data , response) {
    if (e){
      console.error(e)
    }else{
      console.log(require('util').inspect(data));
      res.send(JSON.parse(data))
    };
  }
  )
})

module.exports = {
  viewData,
  viewTimeline,postStatus,
  searchFeature
};
