const Twitter = require('../models/Twatt')
const express = require('express')


module.exports = {
    trend: (req, res) => {
        Twitter.get(
            'https://api.twitter.com/1.1/trends/place.json?id=23424977',
            process.env.USER_TOKEN,//user token
            process.env.USER_SECRET,//secret token
            function (e, data, response) {
                if (e) console.error(e);
                res.send(JSON.parse(data))
            });
    },
    timeline: (req, res) => {
        Twitter.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.USER_TOKEN,//user token
            process.env.USER_SECRET,//secret token
            function (e, data, response) {
                if (e) console.error(e);
                res.send(JSON.parse(data))
            });
    },
    search: (req, res) => {
        Twitter.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.cari}`,
            process.env.USER_TOKEN,//user token
            process.env.USER_SECRET,//secret token
            function (e, data, response) {
                if (e) console.error(e);
                res.send(JSON.parse(data))
            });
    },
    userTimeline: (req, res) => {
        Twitter.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            process.env.USER_TOKEN,//user token
            process.env.USER_SECRET,//secret token
            function (e, data, response) {
                if (e) console.error(e);
                res.send(JSON.parse(data))
            });
    },
    post: (req, res) => {
        Twitter.post(
            // `https://api.twitter.com/1.1/statuses/update.json`,
            `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`,
            process.env.USER_TOKEN,//user token
            process.env.USER_SECRET,//secret token
            // { status: req.body.status },
            'OGI',
            'TAMPAN',
            function (e, data, response) {
                if (e) console.error(e);
                res.send(JSON.parse(data))
            });
    }
}