const OAuth = require('oauth');
const util = require('util')
require('dotenv').config()

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);

class TwittyOut {
    static trendsNear(cb){
        oauth.get(
            'https://api.twitter.com/1.1/trends/place.json?id=1047180&exclude=PersijaDay',
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret             
            function (e, data, res) {
                if (e) console.error(e);
                let a = util.inspect(JSON.parse(data))
                cb(a)
            }); 
    }

    static timelineMe(cb){
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret             
            function (e, data, res) {
                if (e) console.error(e);
                let a = util.inspect(JSON.parse(data))
                cb(a)
            }); 
    }

    static search(params, cb){
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${params.search}&result_type=popular`,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret             
            function (e, data, res) {
                if (e) console.error(e);
                let a = util.inspect(JSON.parse(data))
                cb(a)
            }); 
    }

    static newTweety(body, cb){
        oauth.post(
            "https://api.twitter.com/1.1/statuses/update.json",
            process.env.USER_TOKEN, 
            process.env.USER_SECRET,
            { "status": body.status },
            function (error, data) {
                if (error) {
                    cb(require('sys').inspect(error)) 
                }else {
                    let a = JSON.parse(data)
                    cb(a)
                }
            }
        );
    }
}

module.exports = TwittyOut;