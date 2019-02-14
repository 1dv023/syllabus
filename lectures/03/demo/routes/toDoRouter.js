/**
 * To-do items routes.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/toDoController')

// GET /
router.get('/', controller.index)

// GET, POST /create
router.route('/create')
  .get(controller.create)
  .post(controller.createPost)

// GET, POST /edit
router.get('/edit/:id', controller.edit)
router.post('/edit', controller.editPost)

// GET, POST  /delete
router.get('/delete/:id', controller.delete)
router.post('/delete', controller.deletePost)

// Exports.
module.exports = router
