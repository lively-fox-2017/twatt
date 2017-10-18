const TwitterAPI = require('../models/TwitterAPI');

class TwitterAPIController {

  static index (req, res) {

    res.status(200).json({
      message: 'twitter api index, see available APIs on README'
    });

  }

  static tweet (req, res) {

    TwitterAPI.tweet(req.body.status).then((status) => {

      res.status(201).json({
        message: 'tweeted',
        status: status
      });

    });

  }

  static search (req, res) {

    TwitterAPI.search(req.query.q || '').then((result) => {

      res.status(200).json(result);

    });

  }

  static timeline (req, res) {

    TwitterAPI.timeline().then((result) => {

      res.status(200).json(result);

    });

  }

}

module.exports = TwitterAPIController;
