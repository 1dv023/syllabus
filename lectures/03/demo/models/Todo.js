"use strict";

let mongoose = require("mongoose");

// Defining the Schema
let todoSchema = mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now }
});

// Creating the Model - Just like an Object
let Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
