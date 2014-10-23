var database = require('mysql')
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('sequelize', 'sequelize', 'password', {
      dialect: "mysql",
      host: "localhost",
      port:    3306,
      syncOnAssociation: false
    })
 
sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })

  var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  role: Sequelize.STRING,
  company: Sequelize.STRING
  }, {
    tableName: 'my_table_1',
    timestamps: false
  })

  sequelize
  .sync({ force: false })
  .complete(function(err) {
     if (!!err) {
       console.log('An error occurred while creating the table:', err)
     } else {
       console.log('It worked!')
     }
  })

User
  .create({
    id: 1,
    username: 'mweyman',
    password: 'mweyman',
    role: 'superadmin',
    company: 'combined public'
  })
  .complete(function(err, user) {
    
  })
User
  .create({
    id: 2,
    username: 'nmehl',
    password: 'nmehl',
    role: 'admin',
    company: 'combined public'
  })
  .complete(function(err, user) {
    
  })
User
  .create({
    id: 3,
    username: 'steve',
    password: 'steve',
    role: 'guest',
    company: 'combined public'
  })
  .complete(function(err, user) {
    
  })

sequelize
    .query(
      'SELECT * FROM my_table_1', null,
      {raw: true}, ['active']
      )
    .success(function(projects){
      console.log(projects)
    })

function checkCred(Login,Pass){
    if( Login == this.getDataValue(Login) ){
        if(Pass == sequelize.query('SELECT password FROM my_table_1 WHERE username = Login', null, {raw:true}, ['active'])){
          if(sequelize.query('SELECT role FROM my_table_1 WHERE username = Login', null, {raw:true}, ['active']) == 'superadmin'){
              { method: 'GET', path: '/S_Admin', handler: { view: 'S_Admin.html' }
          }
          if(sequelize.query('SELECT role FROM my_table_1 WHERE username = Login', null, {raw:true}, ['active']) == 'admin'){
              { method: 'GET', path: '/Admin', handler: { view: 'Admin.html' }
          }
          if(sequelize.query('SELECT role FROM my_table_1 WHERE username = Login', null, {raw:true}, ['active']) == 'user'){
              { method: 'GET', path: '/User', handler: { view: 'User.html' }
          }
          if(sequelize.query('SELECT role FROM my_table_1 WHERE username = Login', null, {raw:true}, ['active']) == 'guest'){
              { method: 'GET', path: '/Guest', handler: { view: 'Guest.html' }
          }
        }
    }
}
