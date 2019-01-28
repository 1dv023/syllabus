'use strict'

// Use the express.Router class to create modular, mountable route handlers.
let router = require('express').Router()

// this will trigger on the root url (/)
router.route('/')
  .get(function (request, response) {
    // render the view for the home
    response.render('home/index')
  })

// Exports
module.exports = router
