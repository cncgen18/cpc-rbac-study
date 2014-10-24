"use strict";

var db = require('./../models');

module.exports = {
    up: function(migration, DataTypes, done) {
        db.sequelize
            .sync()
            .complete(done);
    },

    down: function(migration, DataTypes, done) {
        migration
            .dropAllTables()
            .complete(done);
    }
};