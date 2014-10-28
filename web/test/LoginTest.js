var Lab = require('lab');
var lab = exports.lab = Lab.script();

var handlers = require('../lib/handlers');
var uuid = require('uuid');

lab.experiment("Login Endpoint Tests", function() {
    var users = null;

    lab.test("Login", function(done){
        handlers
            .login({username: 'brian', password: 'password'},
            function(response){
                users = response;
                Lab.expect(users).to.be.instanceOf(Array);
                done();
            });
    });
});