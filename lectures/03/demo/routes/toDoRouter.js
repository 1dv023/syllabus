'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/toDoController')

router.get('/', controller.index)

router.route('/create')
  .get(controller.create)
  .post(controller.createPost)

router.get('/edit/:id', controller.edit)
router.post('/edit', controller.editPost)

router.get('/delete/:id', controller.delete)
router.post('/delete', controller.deletePost)

module.exports = router
