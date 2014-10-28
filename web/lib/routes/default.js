module.exports = [
    {
        method: 'GET',
        path: '/{param*}',
        config:{
            handler: {
                directory: {
                    path: __dirname + '../../../public'
                }
            }
        },
        auth:false
    },
    { method: 'GET', path: '/', handler: { view: 'index.html' } }
];