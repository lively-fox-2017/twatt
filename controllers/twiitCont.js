const OAuth = require('oauth')
require('dotenv').config()

let oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CUS_KEY,
      process.env.APP_SEC,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

let trendingTwiit = (req, res) => {
  oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      process.env.USE_TOK, //test user token
      process.env.USE_SEC, //test user secret
      function (e, data, response){
        if (e) {
          console.error(e);
        } else{
          console.log(require('util').inspect(data))
          res.send(JSON.parse(data))
        }
      });
}

let timeline = (req,res)=>{
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.USE_TOK, //test user token
    process.env.USE_SEC, //test user secret
    function (e, data, response){
      if(e){
        //res.send(e)
        console.error(e);
      }else{
        console.log(require('util').inspect(data))
        res.send(JSON.parse(data))
      }
    })
}

let searchTweet = (req,res)=>{
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q= ${req.params.words}`,
    process.env.USE_TOK, //test user token
    process.env.USE_SEC, //test user secret
    function (e, data, response){
      if(e){
        //res.send(e)
        console.error(e);
      }else{
        console.log(require('util').inspect(data))
        res.send(JSON.parse(data))
      }
    })
}

let postTweet = (req,res)=>{
  oauth.post(
    'https://api.twitter.com/1.1/statuses/update.json',
    process.env.USE_TOK, //test user token
    process.env.USE_SEC, //test user secret
    {status:req.body.status},
    function (e, data, response){
      if(e){
        //res.send(e)
        console.error(e);
      }else{
        console.log(require('util').inspect(data))
        res.send(JSON.parse(data))
      }
    })
}

module.exports = {
  trendingTwiit,
  timeline,
  searchTweet,
  postTweet
}
