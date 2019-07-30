const taskAPI = require('../api/task')

module.exports = (app, urlencodedParser) => {

  app.get('/tasks/list/:id', urlencodedParser, taskAPI.showList)
  app.post('/tasks/list/:id', urlencodedParser, taskAPI.addNewTask)
  app.put('/tasks/list/:id', urlencodedParser, taskAPI.changeTask)
  app.delete('/tasks/list/:id', urlencodedParser, taskAPI.deleteTask)

}
