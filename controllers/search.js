const OAuth = require('oauth')
require('dotenv').config()

const oauth = new OAuth.OAuth(
	'https://api.twitter.com/oauth/request_token',
	'https://api.twitter.com/oauth/access_token',
	process.env.cust_key,
	process.env.cust_secret,
	'1.0A',
	null,
	'HMAC-SHA1'
	);

class Search {
	static tweets(req,res) {
		console.log(req.params)
		oauth.get(
		    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.words}`,
		    process.env.token, //test user token 
		    process.env.token_secret, //test user secret             
		    function (err, data){
		    	if (err) {
		      		res.send(err)
		      	} else {
			      	res.send(data)
		      	}        
		});    	
	}
}
module.exports = Search