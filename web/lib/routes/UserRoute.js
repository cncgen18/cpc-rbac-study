"use strict";
var Joi = require('joi');
var handlers = require('./../handlers');

module.exports = [
    {   method: 'GET', path: '/users', config: {
        handler: handlers.getUsers
    } },
    {   method: 'POST', path: '/users', config: {
        handler: handlers.createUser
    }},
    {   method: 'PUT', path: '/users', config: {
        handler: handlers.updateUser
    }},
    {   method: 'DELETE', path: '/devices', config: {
        handler: handlers.deleteUser
    }}
];