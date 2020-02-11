/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

// -----------------------------------------------------------------
// NOTE! Never push the .env file to a repository. In this solution,
//       it is added to the repository just for clarity.
// -----------------------------------------------------------------

require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const hbs = require('express-hbs')
const session = require('express-session')
const { join } = require('path')
const logger = require('morgan')

const mongoose = require('./configs/mongoose')

const app = express()

// connect to the database
mongoose.connect().catch(error => {
  console.error(error)
  process.exit(1)
})

// view engine setup
app.engine('hbs', hbs.express4({
  defaultLayout: join(__dirname, 'views', 'layouts', 'default'),
  partialsDir: join(__dirname, 'views', 'partials')
}))
app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

// additional middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(__dirname, 'public')))

// setup and use session middleware (https://github.com/expressjs/session)
const sessionOptions = {
  name: 'name of keyboard cat', // Don't use default session cookie name.
  secret: 'keyboard cat', // Change it!!! The secret is used to hash the session with HMAC.
  resave: false, // Resave even if a request is not changing the session.
  saveUninitialized: false, // Don't save a created but not modified session.
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}

app.use(session(sessionOptions))

// middleware to be executed before the routes
app.use((req, res, next) => {
  // flash messages - survives only a round trip
  if (req.session.flash) {
    res.locals.flash = req.session.flash
    delete req.session.flash
  }

  next()
})

// routes
app.use('/', require('./routes/homeRouter'))
app.use('/tasks', require('./routes/tasksRouter'))
app.use('*', (req, res, next) => next(createError(404)))

// Error handler.
app.use((err, req, res, next) => {
  // 404 Not Found.
  if (err.status === 404) {
    return res
      .status(404)
      .sendFile(join(__dirname, 'views', 'errors', '404.html'))
  }

  // 500 Internal Server Error (in production, all other errors send this response).
  if (req.app.get('env') !== 'development') {
    return res
      .status(500)
      .sendFile(join(__dirname, 'views', 'errors', '500.html'))
  }

  // Development only!
  // Only providing detailed error in development.

  // Render the error page.
  res
    .status(err.status || 500)
    .render('errors/error', { error: err })
})

// Start listening.
app.listen(8000, () => {
  console.log('Server started on http://localhost:8000')
  console.log('Press Ctrl-C to terminate...')
})
