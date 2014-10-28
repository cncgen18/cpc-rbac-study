"use strict";
var M = require('./../../models');

var internals = {};

internals.get = function(Model, req, rep){
    var query = req.query || {};

    Model
        .findAll({
            where: query
        })
        .then(function(data){
            rep(data);
        })
        .catch(function(err){
            rep(err);
        });
};

internals.create = function(Model, req, rep){
    var model  = req.payload || {};

    Model
        .build(model)
        .save()
        .then(function(data){
            rep(data);
        })
        .catch(function(err){
            if(err.name && err.name == 'SequelizeUniqueConstraintError'){
                console.log(err);
                rep({error: "Duplicate entry for " + err.fields + ". Value must be unique."}).code(500);
            }
            else{
                console.log(err);
                rep({error: 'Internal Error Occurred!'}).code(500);
            }
        });
};

internals.update = function(Model, req, rep){
    var model = req.payload || {};

    Model
        .update(model, {where: {id: model.id }})
        .then(function(data){
            rep(data);
        })
        .catch(function(err){
            if(err.name && err.name == 'SequelizeUniqueConstraintError'){
                rep({error: "Duplicate entry for " + err.fields + ". Value must be unique."}).code(500);
            }
            else{
                rep({error: 'Internal Error Occurred!'}).code(500);
            }
        });
};

internals.delete = function(Model, req, rep){
    var model = req.query || {};

    Model
        .findAll({where: {id: model.id }})
        .then(function(data){
            return data[0].destroy();
        })
        .then(function(data){
            rep(data);
        })
        .catch(function(err){
            console.log(err);
            rep({error: 'Internal Error Occurred!'}).code(500);
        });
};

module.exports = internals;