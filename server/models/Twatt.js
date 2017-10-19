const OAuth = require('oauth')
require('dotenv').config()

const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY, //your application consumer key
    process.env.SECRET_KEY,//your application consumer secret key
    '1.0A',
    null,
    'HMAC-SHA1'
);

module.exports = oauth