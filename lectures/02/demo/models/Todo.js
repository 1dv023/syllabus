'use strict'
/**
 * Stupid data holder...waiting for persistent database
 */

/**
 * Public API
 */
module.exports = {
  add: add,
  all: all
}

// holding data in variable - Just as an example
let database = [{todo: 'Buy milk'}, {todo: 'Go fishing'}]

/**
 * Get a string, add it to an object and push to the data holder array
 */
function add (todoText) {
  let obj = { todo: todoText }
  database.push(obj)
}

/**
 * Returns a copy of the data holder array
 */
function all () {
  return database.slice()
}
