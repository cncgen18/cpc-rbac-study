"use strict";
var M = require('./../../models');
var base = require('./base');

var internals = {};

exports.getUsers = function(req, rep){
    base.get(M.User, req, rep);
};

exports.createUser = function(req, rep) {
    base.create(M.User, req, rep);
};

exports.updateUser = function(req, rep) {
    base.update(M.User, req, rep);
};

exports.deleteUser = function(req, rep) {
    base.delete(M.User, req, rep);
};