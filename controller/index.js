const twitter = require('../models/twitter');
class Index {
  constructor() {

  }
  static home(req,res){
    twitter.getTrending()
    .then(trending=>{
      // console.log(data);
      res.render('index',{title:'Simple OAuth Apps',data:JSON.parse(trending)})
      // res.send(trending);
    })
    .catch(err=>{
      res.send(err);
    })
  }
}

module.exports = Index
