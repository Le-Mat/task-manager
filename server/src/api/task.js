const mongoose = require('mongoose')
const Task = require('../model/Task')
const bodyParser = require('body-parser')
const bluebird = require('bluebird')

mongoose.connect("mongodb://localhost:27017/taskMan", { useNewUrlParser: true })
const Item = require('../model/Task')

api = {}

api.showList = (req, res) => {

}

api.addNewTask = (req, res) => {
  let newTask = new Task( {
    title: req.body.title,
    text: req.body.text,
    date: Date.now(),
    period: req.body.period, 
    done: req.body.done,
    falled: req.body.falled,
    favourite: req.body.favourite
  })
  newTask.save(()=>{
    console.log("added new task!")
    res.send("added new task")
  });
}

api.changeTask = (req, res) => {

}

api.deleteTask = (req, res) => {

}

module.exports = api;