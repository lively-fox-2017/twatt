const OAuth = require('oauth');

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    '2F5BuPPvkXzbntWy2O7ewHI8S',
    'UpiMBPTDZPUx2Uri17oX4IcfH4iSU3rpuPX3fd4UctpCgRcWrL',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

function useApiPromise(url){
  return new Promise((resolve, reject)=>{
    oauth.get(
      url,
      '920498793220591616-t8vCp2kqKoTkfnibY3gqIFGbLALg7B9', //test user token
      'VxhzJe2LfNx87uLX1HCGueuWEiXPzpDuEO7tJV3g67zkC', //test user secret
      function (e, data, res){
        if (e) reject(e);
        else resolve(JSON.parse(data) )
      });
  })
}

function postApiPromise(url, obj){
  return new Promise((resolve, reject)=>{
    oauth.post(
      url,
      '920498793220591616-t8vCp2kqKoTkfnibY3gqIFGbLALg7B9', //test user token
      'VxhzJe2LfNx87uLX1HCGueuWEiXPzpDuEO7tJV3g67zkC', //test user secret
      obj,
      function (e, data, res){
        if (e) reject(e);
        else resolve(JSON.parse(data) )
      });
  })
}

class TwitterAPI{
  static getAllTimeline(){
    return useApiPromise('https://api.twitter.com/1.1/statuses/home_timeline.json')
  }

  static getSearchResult(query){
    return useApiPromise(`https://api.twitter.com/1.1/search/tweets.json?q=${query}`)
  }

  static postTweet(stringStatus){
    return postApiPromise('https://api.twitter.com/1.1/statuses/update.json', {status:stringStatus})
  }
}

// TwitterAPI.getSearchResult().then((data)=>{console.log(data);})
// TwitterAPI.getSearchResult('kadang kadang').then((data)=>{console.log(data);})

// oauth.post('https://api.twitter.com/1.1/statuses/update.json',
// '920498793220591616-t8vCp2kqKoTkfnibY3gqIFGbLALg7B9', //test user token
// 'VxhzJe2LfNx87uLX1HCGueuWEiXPzpDuEO7tJV3g67zkC',
// {status:'shut the fuck up'},
// function(e, data){
//   console.log(data);
// })
// TwitterAPI.getAllTimeline().then(result=>{
//   console.log(result);
//   result.message = 'Berhasil'
//   result.data = result
//   res.status(200).json(result)
// }).catch((err) => {
//   console.log(err);
//   result.message = 'Internal server error'
//   res.status(500).json(result)
// })

module.exports = TwitterAPI;
