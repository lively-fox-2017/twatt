'use strict'
const Twatt = require('./../models/twatt');

const search = (req, res) => {
	Twatt.search(req.params.keyword)
	.then(data => {
		res.status(200).send(JSON.parse(data));
	})
	.catch(err => {
		res.status(500).send(err);
	});
};

module.exports = {search}