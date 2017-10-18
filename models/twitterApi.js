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
  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    '920498793220591616-t8vCp2kqKoTkfnibY3gqIFGbLALg7B9', //test user token
    'VxhzJe2LfNx87uLX1HCGueuWEiXPzpDuEO7tJV3g67zkC', //test user secret
    function (e, data, res){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
    });

class TwitterAPI{

}
