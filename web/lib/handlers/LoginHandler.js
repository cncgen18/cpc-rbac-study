"use strict";
var M = require('./../../models');
var base = require('./base');

exports.login = function(req, rep) {
    var payload = req.payload || {};

    M.User
        .findAll({
            where: payload
        })
        .then(function (data) {
                        if (req.auth !== undefined) {
                            req.auth.session.set(credentials);
                            req.session.set('accessControls', access); // This will be stored in yar cache plugin.
                        }
                        rep(data);
                    })
        .catch(function(err){
            rep(err);
        });
};