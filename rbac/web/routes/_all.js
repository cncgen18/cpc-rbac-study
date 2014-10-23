var default_routes = require('./default');

// Add new routes into the array below
var routes = [
    default_routes
];

var parsedRoutes = function(routes){
    var new_routes = [];
    for(var x = 0; x < routes.length; x++){
        for(var y = 0; y < routes[x].length; y++){
            new_routes.push(routes[x][y]);
        }
    }
    return new_routes;
};

module.exports = parsedRoutes(routes);