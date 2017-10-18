const Twittod = require('../models/tweety')

class TwittyAct{
    static trendsNear(req, res){
        Twittod.trendsNear((err, trend)=>{
            if(err){
                res.send(err)
            } else {
                res.send(trend)
            }
        }) 
    }

    static timelineMe(req, res){
        Twittod.timelineMe((err, trend)=>{
            if (err) {
                res.send(err)
            } else {
                res.send(trend)
            }
        })
    }

    static search(req, res){
        Twittod.search(req.params, (err, result)=>{
            if (err){
                console.log('dari controller-----');
                res.send(err)
            } else {
                res.send(result)
            }
        })
    }

    static newTweety(req, res){
        console.log('dari controller-----');
        Twittod.newTweety(req.body, (err, result)=>{
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    }
}

module.exports = TwittyAct;