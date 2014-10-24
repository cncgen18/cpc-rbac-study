"use strict";

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: DataTypes.STRING(100), unique: true, allowNull: false },
        password: { type: DataTypes.STRING(100), allowNull: false },
        role: { type: DataTypes.STRING(100), allowNull: false },
        company: { type: DataTypes.STRING(100), allowNull: false }
    });

    return User;
};