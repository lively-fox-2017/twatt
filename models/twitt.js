var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'UlAihjqHTmf2RJ7uMx6mzpgmm',
      'wDE1crVO3pjb28TrAnbryuwsnLh3UAkPg7KEs3P2fMs2Fb3yEQ',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

const userToken='920492175565172742-ndHzWf1jK7nQOVydeXwp3zigUWoKD9o'
const userSecret='zP0jvfHOY4Z12xkBmRlxBA8EqALFY6f5S4RRPkO1KpaI9'

class twitt{
  static getTrend(id){
    return new Promise(function(resolve, reject) {
      oauth.get(
            `https://api.twitter.com/1.1/trends/place.json?id=${id}`,
            userToken, //test user token
            userSecret, //test user secret
            function (e, data, res){
              if (e) console.error(e);
              resolve(JSON.parse(data))
              // res.json(200,{msg:'trending', trend : data})
              // console.log(require('util').inspect(data));
            });
    });
  }

  static recent(){
    return new Promise(function(resolve, reject) {
      oauth.get(
            `https://api.twitter.com/1.1/statuses/home_timeline.json`,
            userToken,
            userSecret,
            function (e, data, res){
              if (e) console.error(e);
              resolve(JSON.parse(data))
            });
    });
  }



  static doTweet(sts){
    return new Promise(function(resolve, reject) {
      oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            userToken,
            userSecret,
            {"status":sts} ,
            function (e, data, res){
              if (e) console.error(e);
              resolve(JSON.parse(data))
            });
    });
  }

  static searchtweet(text){
    return new Promise(function(resolve, reject) {
      oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${text}`,
            userToken,
            userSecret,
            function (e, data, res){
              if (e) console.error(e);
              resolve(JSON.parse(data))
            });
    });
  }

  static placenear(search){
    return new Promise(function(resolve, reject) {
      oauth.get(
            `https://api.twitter.com/1.1/geo/search.json?query=${search}`,
            userToken,
            userSecret,
            function (e, data, res){
              if (e) console.error(e);
              resolve(JSON.parse(data))
            });
    });
  }



}

module.exports = twitt;
