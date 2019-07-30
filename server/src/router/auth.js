const authApi = require('../api/auth')
const User = require('../model/User')

module.exports = (app, urlencodedParser) => {

  app.get('/signin', urlencodedParser, authApi.showSignin)
  app.post('/signin', urlencodedParser, authApi.saveSignin)

  app.get('/login', urlencodedParser, authApi.showLogin)
  app.post('/login', authApi.authLogin)  

  app.post('/signout', urlencodedParser, authApi.signout)

}
