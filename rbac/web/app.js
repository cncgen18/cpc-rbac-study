var Hapi = require('hapi');
var Settings = require('./settings');
var routes = require('./routes/_all');
var data = require('./data.js');
var rbac = require('./rbac.js');

var options = {
    views: {
        engines: {
            html: require('handlebars')
        },
        basePath: __dirname,
        path: '/static/templates',
        compileOptions: {
            pretty: true
        }
    },
    debug: {
        request: ['error', 'uncaught']
    }
};

var server = new Hapi.Server(Settings.server.port, options);

server.route(routes);

server.on('internalError', function (request, err) {
    console.log('Error response (500) sent for request: ' + request.id + ' because: ' + err.message);
});

exports.server = server;

