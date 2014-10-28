#!/usr/bin/env node
var Hapi = require('hapi');
var Good = require('good');

var manifest = {
    pack: {
        cache: "catbox-memory"
    },
    servers: [
        {
            host: "0.0.0.0",
            port: 5550,
            options: {
                debug: { request: ["error"] }
            }
        }
    ],
    plugins: {
        'good': {
            reporters: [
                {
                    reporter: Good.GoodConsole
                }
            ]
        },
        './../../../../web': {}
    }
};

Hapi.Pack.compose(manifest, function(err, pack){
    pack.start(function(err){
        if(!err){
            console.log('Dev Server Pack Started!');
        }
    })
});