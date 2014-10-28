var Lab = require('lab');
var lab = exports.lab = Lab.script();

var handlers = require('../lib/handlers');
var uuid = require('uuid');

lab.experiment("User Endpoint Tests", function() {
    var users = null;
    var created = null;

    lab.test("Get All", function(done){
        handlers
            .getUsers({},
            function(response){
                users = response;
                Lab.expect(users).to.be.instanceOf(Array);
                done();
            });
    });

    lab.test("Get by PARAMS", function(done){
        var target = users[0];

        handlers
            .getUsers({query:{id:target.id}},
            function(response){
                var result = response;
                Lab.expect(result).to.be.instanceOf(Array);
                Lab.expect(result.length).to.equal(1);
                Lab.expect(result[0].username).to.equal(target.username);
                done();
            });
    });

    lab.test("Create", function(done){
        var payload = {
            username: uuid.v1(),
            password: 'password',
            role: 'admin',
            company: 'cpc'
        };

        handlers
            .createUser({ payload: payload },
            function(response){
                created = response;
                Lab.expect(created.name).to.equal(payload.name);
                done();
            });
    });

    lab.test("Update", function(done){
        var payload = {
            id: created.id,
            username: uuid.v1()
        };

        handlers
            .updateUser({payload: payload},
            function(response){
                var result = response[0];
                Lab.expect(result).to.equal(1);
                done();
            });
    });

    lab.test("Delete", function(done){
        var query = {
            id: created.id
        };

        handlers
            .deleteUser({query: query},
            function(response){
                var result = response;
                done();
            });
    });
});