'use strict'

const mongoose = require('mongoose')

// Create a schema.
const toDoItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  timestamps: true
})

// Create a model using the schema.
const ToDoItem = mongoose.model('ToDoItem', toDoItemSchema)

// Exports.
module.exports = ToDoItem
