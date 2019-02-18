/**
 * Mongoose model ToDoItem.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

const mongoose = require('mongoose')

// Create a schema.
const toDoItemSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
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
  }
})

// Create a model using the schema.
const ToDoItem = mongoose.model('ToDoItem', toDoItemSchema)

// Exports.
module.exports = ToDoItem
