const dotenv = require('dotenv').config();
const OAuth = require('oauth');

class TwitterAPI {

  static oauth () {

    return new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

  }

  static tweet (status) {

    return new Promise((resolve, reject) => {

      TwitterAPI.oauth().post(
        `https://api.twitter.com/1.1/statuses/update.json`,
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        {"status": status},
        (err, result) => {
          if (err) console.log(err);
          resolve(JSON.parse(result));
        }
      );

    });

  }

  static search (keyword) {

    return new Promise((resolve, reject) => {

      TwitterAPI.oauth().get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}`,
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        (err, result, twitterRes) => {
          if (err) console.log(err);
          resolve(JSON.parse(result));
        }
      );

    });

  }

  static timeline () {

    return new Promise((resolve, reject) => {

      TwitterAPI.oauth().get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        (err, result, twitterRes) => {
          if (err) console.log(err);
          resolve(JSON.parse(result));
        }
      );

    });

  }

}

module.exports = TwitterAPI;
