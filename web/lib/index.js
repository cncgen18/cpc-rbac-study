var routes = require('./routes');

var businessOptions = {
    views: {
        engines: {
            handlebars: require('handlebars')
        },
        basePath: __dirname,
        path: './public/templates',
        compileOptions: {
            pretty: true
        }
    }
};

exports.register = function (plugin, options, next) {
    plugin.views(businessOptions.views);
    plugin.route(routes);
    next();
};

exports.register.attributes = {
    name: 'rbac-study',
    version: '1.0.0'
};