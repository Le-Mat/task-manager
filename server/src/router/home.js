const homeAPI = require('../api/home')

module.exports = (app, urlencodedParser) => {

  app.get('/', urlencodedParser, homeAPI.index )
  app.post('/', urlencodedParser, homeAPI.changeLastTask )

}