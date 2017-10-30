var express = require('express');
var passport = require('passport');
var DemoUserData = require('../models/userData');
var router = express.Router();

var isAuthenticated = function(req,res,next) { 
    if(req.user) console.log('authenticate: user of current request:', req.user.email);
    else console.log('authenticate: unlogged user');
    if (req.isAuthenticated()) return next(); 
    res.status(400);
    res.json({"error":'not logged'});

};

// Get all models
router.get('/getModels', function(req, res, next){
    if(req.user){
        console.log(req.user);
        var models = require('../data/models');
        res.json(models);
    }
    else{
        DemoUserData.find({user:'demo'})
                .exec(function(err, docs){
                    // console.log(err,docs);
                    if(err){
                        res.send(err);
                    }
                    else{
                        if(docs.length==0){
                            var models = require('../data/models');
                            DemoUserData.create({user:user, models:models}, function(err, doc){
                                console.log('create？？？？？？？？？,', err, doc);
                                // req.session.userData = doc;
                                res.json(doc.models);
                            });
                        }
                        else{
                            // else userData = userData.models;
                            // req.session.userData = docs[0];
                            // console.log(req.session.userData.createNode);
                            res.json(docs[0].models);
                        }
                        
                    }
                    
                });
    }
});

router.get('/getUserData', function(req, res, next){
    var user;
    if (req.isAuthenticated()) user = req.user.email;
    else user = 'demo';
    DemoUserData.find({user:user})
                .exec(function(err, docs){
                    // console.log(err,docs);
                    if(err){
                        res.send(err);
                    }
                    else{
                        if(docs.length==0){
                            var models = require('../data/models');
                            DemoUserData.create({user:user, models:models}, function(err, doc){
                                console.log('create？？？？？？？？？,', err, doc);
                                req.session.userData = doc;
                                res.json(doc.models);
                            });
                        }
                        else{
                            // else userData = userData.models;
                            req.session.userData = docs[0];
                            // console.log(req.session.userData.createNode);
                            res.json(docs[0].models);
                        }
                        
                    }
                    
                });
});

//create node
router.post('/createNode', isAuthenticated, function(req, res, next){
    var node = req.body;
    console.log('create node: ',node.name);
    // var userData = req.session.userData;
    // console.log(req.session.userData.createNode);
    DemoUserData.find({user:req.user.email})
                .exec(function(err, docs){
                    var userData = docs[0];
                    userData.createNode(node);
                    userData.save();
                });
});

//connect port
router.post('/connectPort', isAuthenticated, function(req, res, next){
    var connection = req.body;
    console.log('connect port: ',connection);
    // var userData = req.session.userData;
    // console.log(req.session.userData.createNode);
    DemoUserData.find({user:req.user.email})
                .exec(function(err, docs){
                    var userData = docs[0];
                    userData.connectPort(connection.outPortId, connection.inPortId);
                    userData.save();
                });
});
//disconnect port
router.post('/disconnectPort', isAuthenticated, function(req, res, next){
    var connection = req.body;
    console.log('disconnect port: ',connection);
    // var userData = req.session.userData;
    // console.log(req.session.userData.createNode);
    DemoUserData.find({user:req.user.email})
                .exec(function(err, docs){
                    var userData = docs[0];
                    userData.disconnectPort(connection.outPortId, connection.inPortId);
                    userData.save();
                });
});

//move node
router.post('/moveNode', isAuthenticated, function(req, res, next){
    var data = req.body;
    console.log('move node: ',data);
    // var userData = req.session.userData;
    // console.log(req.session.userData.createNode);
    DemoUserData.find({user:req.user.email})
                .exec(function(err, docs){
                    var userData = docs[0];
                    userData.moveNode(data.id, data.x, data.y);
                    userData.save();
                });
});

// Delete Task
router.delete('/task/:id', isAuthenticated, function(req, res, next){
    console.log('delete:', req.params.id);
    // Task.remove({
    //         _id: req.params.id,
    //         user: req.user.email
    //     }, function(err, task){
    //     if(err){
    //         res.send(err);
    //     }
    //     else res.json(task);
    // });
});

// set task to be done
router.put('/task/:id', isAuthenticated, function(req, res, next){
    var updateTask = req.body;
    console.log('update task:', req.params.id, ' to ', updateTask);
    if(updateTask && req.params.id){
        // Task.where({
        //         _id: req.params.id,
        //         user: req.user.email
        //     })
        //     .update({$set:updateTask}, function(err, task){
        //         if(err){
        //             return res.send(err);
        //         }
        //         console.log(task.nModified, ' task is updated');
        //         res.json(null);
        //     });
    }
    else{
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
});

module.exports = router;