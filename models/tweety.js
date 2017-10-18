const OAuth = require('oauth');
const util = require('util')

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'mCmsiO8bX6gm7pLUR2RV7vZv3',
    'pIibss2D4SSJrDlmcJ1FASiWPMNhm6oFdpjBaLftbpCzgJC5EY',
    '1.0A',
    null,
    'HMAC-SHA1'
);

class TwittyOut {
    static trendsNear(cb){
        oauth.get(
            'https://api.twitter.com/1.1/trends/place.json?id=1047378',
            '222374147-4UBd9OypJb2PTgOdLF2NE62eKC1fqx84uZzlelca', //test user token 
            'wodEpGeTLQ02VdrXQun8TymaYm8W9KQowOv9prENOgYzS', //test user secret             
            function (e, data, res) {
                if (e) console.error(e);
                let a = util.inspect(JSON.parse(data))
                cb(a)
            }); 
    }

    static timelineMe(cb){
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            '222374147-4UBd9OypJb2PTgOdLF2NE62eKC1fqx84uZzlelca', //test user token 
            'wodEpGeTLQ02VdrXQun8TymaYm8W9KQowOv9prENOgYzS', //test user secret             
            function (e, data, res) {
                if (e) console.error(e);
                let a = util.inspect(JSON.parse(data))
                cb(a)
            }); 
    }

    static search(params, cb){
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${params.search}&result_type=popular`,
            '222374147-4UBd9OypJb2PTgOdLF2NE62eKC1fqx84uZzlelca', //test user token 
            'wodEpGeTLQ02VdrXQun8TymaYm8W9KQowOv9prENOgYzS', //test user secret             
            function (e, data, res) {
                if (e) console.error(e);
                let a = util.inspect(JSON.parse(data))
                cb(a)
            }); 
    }

    static newTweety(body, cb){
        oauth.post(
            "https://api.twitter.com/1.1/statuses/update.json",
            "222374147-4UBd9OypJb2PTgOdLF2NE62eKC1fqx84uZzlelca", 
            "wodEpGeTLQ02VdrXQun8TymaYm8W9KQowOv9prENOgYzS",
            { "status": body.status },
            function (error, data) {
                if (error) {
                    console.log('dari model=======')
                    cb(require('sys').inspect(error)) 
                }else {
                    cb(data)
                }
            }
        );
    }
}

module.exports = TwittyOut;