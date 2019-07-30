const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
  },
  period: {
    type: Number
  },
  done: {
    type: Boolean
  },
  falled: {
    type: Boolean
  },
  favourite: {
    type: Boolean
  }
})

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel