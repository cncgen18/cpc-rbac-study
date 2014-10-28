"use strict";

var fs        = require("fs");
var path      = require("path");
var allHandlers = {};

var parseHandlers = function(obj){
    for(var property in obj){
        allHandlers[property] = obj[property];
    }
};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var reqPath = './' + file.replace('.js', '');
        var methods = require(reqPath);
        parseHandlers(methods);
    });

module.exports = allHandlers;
