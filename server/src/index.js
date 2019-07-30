const express = require('express'),
  app = express(),
  router = require('./router/index'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'), //НАСТРОИТЬ !!!!
  cors = require('cors'), //НАСТРОИТЬ !!!!
  mongoose = require('mongoose'),
  bluebird = require('bluebird'),
  urlencodedParser = bodyParser.urlencoded({ extended: false })

router(app, urlencodedParser);

const connectDb = () => {
  mongoose.Promise = bluebird

  const options = {
    useMongoClient: true
  }
  mongoose.connect('mongodb://localhost/testmongoose', options)
  return mongoose.connection
}

app.listen(1111, () => {
  console.log('server work on 1111 port')
})

