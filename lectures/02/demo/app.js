/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

const express = require('express')
const hbs = require('express-hbs')
const path = require('path')
const logger = require('morgan')

const app = express()

// view engine setup
app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, 'views', 'layouts', 'default')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// additional middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', require('./routes/homeRouter'))

// catch 404
app.use('*', (req, res, next) => {
  res.status(404)
  res.sendFile(path.join(__dirname, 'views', 'errors', '404.html'))
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal Server Error')
})

// listen to provided port
app.listen(8000, () => console.log('Server running at http://localhost:8000'))
