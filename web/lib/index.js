var Hoek = require('hoek');
var routes = require('./routes').routes;

exports.register = function (plugin, options, next) {
    if (typeof options.route != 'undefined'){
        plugin.config.route.prefix = options.route.prefix;
    }

    plugin.route(routes);

    next();
};

exports.register.attributes = {
    name: 'proto-rbac',
    version: '1.0.0'
};