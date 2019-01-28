'use strict'

// http://expressjs.com/en/4x/api.html#router
let router = require('express').Router()
let Todo = require('../models/Todo')

/**
 * called when we want to list all todos
 */
router.route('/')
  .get(function (request, response) {
    response.render('todo/index', { todos: Todo.all() })
  })

/**
 * Chain the different routes to create
 */
router.route('/create')
  .get(function (request, response) {
    // render the form
    response.render('todo/create')
  })
  .post(function (request, response) {
    let unValidatedMessage = request.body.todoText

    // simple validation
    if (unValidatedMessage.length > 0) {
      Todo.add(unValidatedMessage)

      // PRG-pattern
      return response.redirect('/todo')
    }

    // Render the error
    response.render('todo/create', {error: 'You must enter some text!'})
  })

// Exports
module.exports = router

// Plain middleware
/*
router.get("/", function(req, res, next) {
  console.log("Hello before GET /todo!");
  // do something with the GET
  next(); // send to next middleware function in the chain
});
*/
