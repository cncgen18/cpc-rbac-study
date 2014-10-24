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
        }
    },
    { method: 'GET', path: '/', handler: { view: 'index.html' } }
];