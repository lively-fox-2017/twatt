const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      // 'your application consumer key',
      '7eE6m6cEHOlWGY3RQEVN1mVwV',
      // 'your application secret',
      'aggJFfD5L1ZM4aUvOntPepVJt8jmYVz64WV5EeRvrghrLKxba6',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
const userToken='67838809-Gc1znKKMXIq7XYA1CLt0xCUBFLVEUeZVPlGvpsPsq';
const userSecret='MoYi6saP32YyfQD4sjvfxvimwGtxYEuaW12jA2sM7KHYm';
class Twitter {
  constructor() {

  }
  static getTrending(){
    return new Promise(function(resolve,reject){
      oauth.get(
        // 'https://api.twitter.com/1.1/trends/place.json?id=1047378',
        'https://api.twitter.com/1.1/trends/place.json?id=23424977',
        // 'https://api.twitter.com/1.1/trends/search.json?q=hacktiv8',
        // 'your user token for this app', //test user token
        userToken,
        // 'your user secret for this app', //test user secret
        userSecret,
        function (e, data, res){
          if (e) reject(e)
          // console.log(require('util').inspect(data));
          // done();
          // console.log(data);
          resolve(data);
        }
      );
    })
  }
  static getLastTimeLine(param){
    return new Promise(function(resolve,reject){
      oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        userToken,
        userSecret,
        function (e, data, res){
          if (e) reject(e)
          // console.log(require('util').inspect(data));
          // done();
          // console.log(data);
          resolve(data);
        }
      );
    })
  }
  static searchTimeLine(param){
    return new Promise(function(resolve,reject){
      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=%23'${param}'&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4`,
        userToken,
        userSecret,
        function(error, data) {
          // if(error) console.log(require('sys').inspect(error))
          // else console.log(data)
          if (error) {reject(error)}
          resolve(data)
        }
      );
    })
  }
  static postNewPost(tweet){
    return new Promise(function(resolve,reject){
      // console.log('tesss',tweet);
      oauth.post(
        // "http://api.twitter.com/1/statuses/update.json",
        // 'https://api.twitter.com/1.1/statuses/update.json?status='+tweet,
        'https://api.twitter.com/1.1/statuses/update.json',
        userToken,
        userSecret,
        // tweet,
        // 'txt',
        {"status":`${tweet}`},
        function(error, data) {
          // if(error) console.log(require('sys').inspect(error))
          // else console.log(data)
          if (error) {reject(error)}
          resolve(tweet)
        }
      );
    })
  }
}

module.exports = Twitter
