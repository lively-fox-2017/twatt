const Oauth = require('oauth')


let oauth = new Oauth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '2uaPc5sLqnqwTkWJGMIGK4y0e',
      'RR6KYLp30VPraqMhEJBbwV9dNLHe464AzSZRybEVzt9PnR34xX',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

class Twitter {
  constructor() {

  }

  static topTweets() {
    let promise = new Promise(function(resolve,reject) {
      oauth.get(
        'https://api.twitter.com/1.1/trends/place.json?id=1047378',
        '2769114145-mYvslJcmuFA4LxqeD6vjd5txE6oVjfwNiWTzPqj', //test user token
        'sNmxAozJXhxEiERWB8QNVMgwGPzhfMFrWWOaQz2v3GdgH', //test user secret
        function (error, data){
          if (!error) {
            resolve(JSON.parse(data))
          } else {
            reject(error)
          }
        })
    })
    return promise
  }

  static getTimeline() {
      let promise = new Promise(function(resolve,reject) {
        oauth.get(
          'https://api.twitter.com/1.1/statuses/home_timeline.json',
          '2769114145-mYvslJcmuFA4LxqeD6vjd5txE6oVjfwNiWTzPqj', //test user token
          'sNmxAozJXhxEiERWB8QNVMgwGPzhfMFrWWOaQz2v3GdgH', //test user secret
          function (error, data){
            if (!error) {
              resolve(JSON.parse(data))
            } else {
              reject(error)
            }
          })
      })
    return promise
  }

  static searchTweet(params) {
    let promise = new Promise(function(resolve,reject) {
      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${params.cari}`,
        '2769114145-mYvslJcmuFA4LxqeD6vjd5txE6oVjfwNiWTzPqj', //test user token
        'sNmxAozJXhxEiERWB8QNVMgwGPzhfMFrWWOaQz2v3GdgH', //test user secret
        function (error, data){
          if (!error) {
            resolve(JSON.parse(data))
          } else {
            reject(error)
          }
        });
    })
    return promise
  }

  static createTweet(body) {
    let promise = new Promise(function(resolve,reject) {
      oauth.post(
        'https://api.twitter.com/1.1/statuses/update.json',
        '2769114145-mYvslJcmuFA4LxqeD6vjd5txE6oVjfwNiWTzPqj', //test user token
        'sNmxAozJXhxEiERWB8QNVMgwGPzhfMFrWWOaQz2v3GdgH', //test user secret
        {status : body.status},
        function (error, data){
          if (!error) {
            resolve(JSON.parse(data))
          } else {
            reject(error)
          }
        });
    })
    return promise
  }
}

module.exports = Twitter
