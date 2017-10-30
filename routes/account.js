var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();


router.post('/signup', function(req, res) {
	console.log('signup:', req.body);
    Account.register(new Account({ email : req.body.email }), req.body.password, function(err, account) {
        if (err) {
            console.log('register failed:',err);
            return res.json({"error": "register failed"});
        }

        passport.authenticate('local')(req, res, function (){
            res.json({"success":"success"});
        });
    });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    console.log('login request:',req.user.email);
    req.session.userData = [];
    // console.log('session:', req.session);

    res.json({"success":"success"});
});


router.get('/logout',  function(req, res) {
    console.log('logout:', req.user);
    if(req.isAuthenticated()){
        req.logout();
        res.send({success: "success"});
    }
});

router.get('/check',  function(req, res) {
    // console.log('check:', req.user);
    if(req.isAuthenticated()){
        res.send({user: req.user.email});
    }
    else res.send({});
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;