var assert = require('assert');
var flow = require('nimble');
var Models = require('./../models');

describe('Table Seed', function(){
    it('should seed users', function(done){
        Models
            .User
            .bulkCreate([
                { username: 'brian', password: 'password', role:'admin', company: 'cpc' },
                { username: 'kyle', password: 'password', role:'admin', company: 'cpc' },
                { username: 'ben', password: 'password', role:'admin', company: 'cpc' },
                { username: 'noah', password: 'password', role:'admin', company: 'cpc' },
                { username: 'michael', password: 'password', role:'admin', company: 'cpc' }
            ]).success(function () {
                done();
            }).error(function (error) {
                assert.fail(error);
            });
    });

});