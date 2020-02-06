/**
 * Mongoose model Task.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

const mongoose = require('mongoose')

// Create a schema.
const taskSchema = new mongoose.Schema({
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
}, {
  timestamps: true
})

// Create a model using the schema.
const Task = mongoose.model('Task', taskSchema)

// Exports.
module.exports = Task
