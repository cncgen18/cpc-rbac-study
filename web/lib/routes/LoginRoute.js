"use strict";
var Joi = require('joi');
var handlers = require('./../handlers');

module.exports = [
    {   method: 'POST', path: '/login', config: {
        handler: handlers.login
    } }
];