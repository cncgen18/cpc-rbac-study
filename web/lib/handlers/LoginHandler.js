"use strict";
var M = require('./../../models');
var base = require('./base');

exports.login = function(req, rep) {
    var payload = req.payload || {};

    M.User
        .findAll({
            where: payload
        })
        .then(function(data){
            rep(data);
        })
        .catch(function(err){
            rep(err);
        });
};