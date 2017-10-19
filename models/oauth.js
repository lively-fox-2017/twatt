const oauth = require('oauth')
const dotenv = require('dotenv').config()

let reqToken = 'https://api.twitter.com/oauth/request_token'
let accesToken = 'https://api.twitter.com/oauth/access_token'
let consumerKey = process.env.consumerKey
let consumerSecret = process.env.consumerSecret
// let callback = 'https://localhost:3000'
let userToken = process.env.userToken
let userSecret = process.env.userSecret

let tweetOauth = new oauth.OAuth(
  reqToken,
  accesToken,
  consumerKey,
  consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
)

class Oauth{
  static search(dataSearch){
    return new Promise((resolve, reject) => {
      tweetOauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${dataSearch}`,
        userToken,
        userSecret,
        function (e, data, res){
          if (e){
            reject(e)
          } else {
            resolve(JSON.parse(data))
          }
        }
      )
    });
  }

  static recentTweet(){
    return new Promise((resolve, reject) => {
      tweetOauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        userToken,
        userSecret,
        function (e, data, res){
          if (e){
            reject(e)
          } else {
            resolve(JSON.parse(data))
          }
        }
      )
    });
  }

  static tweet(tweetUpdate){
    return new Promise((resolve, reject) => {
      tweetOauth.post(
        'https://api.twitter.com/1.1/statuses/update.json',
        userToken,
        userSecret,
        {"status": tweetUpdate},
        function (e, data, res){
          if (e){
            reject(e)
          } else {
            resolve(JSON.parse(data))
          }
        }
      )
    });
  }
}

module.exports = Oauth
