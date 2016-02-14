"use strict";
/**
 * Stupid data holder...waiting for persistant database
 */

/**
 * Public API
 */
module.exports = {
  add : add,
  all : all
};

// holding data in varaible - Just as an example
let database = [{todo: "Buy milk"}, {todo: "Go fishing"}];

/**
 * Get a string, add it to an object and push to the dataholder array
 */
function add(todoText) {
  let obj = { todo: todoText };
  database.push(obj);
}

/**
 * Returns a copy of the dataholder array
 */
function all() {
  return database.slice();
}
