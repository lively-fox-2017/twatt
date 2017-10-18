'use strict'

const OAuth = require('oauth');

const reqTokenURL = 'https://api.twitter.com/oauth/request_token';
const accTokenURL = 'https://api.twitter.com/oauth/access_token';

const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;
const userToken = process.env.USER_TOKEN;
const userSecret = process.env.USER_SECRET;

const oauth = new OAuth.OAuth(reqTokenURL, accTokenURL, consumerKey, consumerSecret, '1.0A', null, 'HMAC-SHA1');


const search = (keyword) => {
	const reqEndpoint = 'https://api.twitter.com/1.1/search/tweets.json';
	const params = '?q=' + keyword;

	return new Promise((resolve, reject) => {
		oauth.get(reqEndpoint + params, userToken, userSecret, (err, data, res) => {
			if (err) reject(err);
			resolve(data);
		});
	});
};

module.exports = {search};