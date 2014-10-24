"use strict";

var fs        = require("fs");
var path      = require("path");
var allRoutes = [];

var parsedRoutes = function(routes){
    for(var x = 0; x < routes.length; x++){
        allRoutes.push(routes[x]);
    }
};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var reqPath = './' + file.replace('.js', '');
        var routes = require(reqPath);
        parsedRoutes(routes);
    });


exports.routes = allRoutes;