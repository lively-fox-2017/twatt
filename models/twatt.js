const OAuth = require('oauth');

let oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'mpPiKjXFaA5BJVUmXvtMtd4qG',
      'ZwYoDfEZifPw0wKMDWm7D2K1b8NX6eIWKmY5LGf4O6Ivtu2vNJ',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

class Twitter {
  // trending jakarta
  static getTrending(){
    return new Promise(function(resolve, reject) {
      oauth.get(
        'https://api.twitter.com/1.1/trends/place.json?id=1047378',
        '2381680873-P0fAJSy73ZT3ndSPOcw8bVrcNYH71yjQdMz8SWm', //test user token
        'E6LlcvmkXVDOJDUkbxmeGLepP9mCd1KtKwiXE7cv2ooGg', //test user secret
        (err, data)=>{
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(data));
          }
        }
      )
    })
  }
  // timeline feature
  static getTimeline(){
    return new Promise(function(resolve, reject) {
      oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        '2381680873-P0fAJSy73ZT3ndSPOcw8bVrcNYH71yjQdMz8SWm', //test user token
        'E6LlcvmkXVDOJDUkbxmeGLepP9mCd1KtKwiXE7cv2ooGg', //test user secret
        (err, data)=>{
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(data));
          }
        }
      )
    })
  }

  //search feature
  static searchFeature(params){
    return new Promise(function(resolve, reject) {
      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${params.key}`,
        '2381680873-P0fAJSy73ZT3ndSPOcw8bVrcNYH71yjQdMz8SWm', //test user token
        'E6LlcvmkXVDOJDUkbxmeGLepP9mCd1KtKwiXE7cv2ooGg', //test user secret
        (err, data)=>{
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(data));
          }
        }
      )
    })
  }

  //Post Tweet
  static postTweet(body){
    return new Promise(function(resolve, reject) {
      oauth.post(
        'https://api.twitter.com/1.1/statuses/update.json',
        '2381680873-P0fAJSy73ZT3ndSPOcw8bVrcNYH71yjQdMz8SWm', //test user token
        'E6LlcvmkXVDOJDUkbxmeGLepP9mCd1KtKwiXE7cv2ooGg', //test user secret
        {"status": body.status},
        (err, data)=>{
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(data));
          }
        }
      )
    })
  }


}

module.exports = Twitter;
