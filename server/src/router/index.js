const home = require('./home'),
  task = require('./task'),
  auth = require('./auth');

module.exports = (app, urlencodedParser) => {
  home(app, urlencodedParser),
  task(app, urlencodedParser),
  auth(app, urlencodedParser)
}