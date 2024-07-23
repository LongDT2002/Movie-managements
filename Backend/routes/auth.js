var express = require('express');
var router = express.Router();
var Account = require('../models/account.model');
var Profile = require('../models/profile.model');


router.get('/', function(req, res) {
    Account.find({}).then(function(accounts) {
        res.send(accounts);
    });
});


router.get('/user/:id', function(req, res) {
    Account.findById(req.params.id).then(function(account) {
        res.send(account);
    });
});


router.post('/register', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const account = new Account({
        email: email,
        password: password
    });

    try {
        await account.save();
        const profile = new Profile({
            account: account._id,
            name: "",
            birthday: "",
            biography: "",
            country: ""
        });
        await profile.save();
        res.status(201).send({
            status: 201,
            message: "Account created successfully",
            account: account
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: "Error creating account",
            error: err.message
        });
    }
});


router.post('/login', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    
    Account.findOne({email: email})
        .then(function(account) {
            if (account.password === password) {
                res.send({
                    status: res.statusCode,
                    message: "Login successful",
                    account: account
                });
            } else {
                res.send({
                    status: res.statusCode,
                    message: "Wrong password"
                });
            }
        })
        .catch(function(err) {
            res.send(err);
        });
});


module.exports = router;
