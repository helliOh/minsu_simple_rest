module.exports = (app) =>{
  //USER ROUTER
  app.use('/api/user', require('./user'));
}
