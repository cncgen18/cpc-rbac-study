"use strict";
var Joi = require('joi');
var handlers = require('./../handlers');

module.exports = [
    { method: 'POST', path: '/login', config: {
        handler: handlers.login,
        auth: {
            mode: 'try',
            strategy: 'cookie-route'
        },
        validate:{
            payload:{
                username: Joi.string().required(),
                password: Joi.string().required()
            }
        }
    }},
   ];