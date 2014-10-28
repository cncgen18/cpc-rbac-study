"use strict";
var Joi = require('joi');
var handlers = require('./../handlers');

module.exports = [
    {   method: 'GET', path: '/login', config: {
        handler: handlers.login
    } }
];