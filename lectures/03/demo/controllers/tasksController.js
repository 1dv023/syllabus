/**
 * Module for tasksController.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

const Task = require('../models/Task')

const tasksController = {}

/**
 * Displays a list of tasks.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
tasksController.index = async (req, res, next) => {
  try {
    const viewData = {
      tasks: (await Task.find({}))
        .map(task => ({
          id: task._id,
          description: task.description,
          done: task.done
        }))
    }
    res.render('tasks/index', { viewData })
  } catch (error) {
    next(error)
  }
}

/**
 * Returns a HTML form for creating a new task.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
tasksController.new = async (req, res) => {
  const viewData = {
    description: '',
    done: false
  }
  res.render('tasks/new', { viewData })
}

/**
 * Creates a new task.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
tasksController.create = async (req, res) => {
  try {
    const task = new Task({
      description: req.body.description,
      done: req.body.done
    })

    await task.save()

    req.session.flash = { type: 'success', text: 'The task was created successfully.' }
    res.redirect('.')
  } catch (error) {
    req.session.flash = { type: 'danger', text: error.message }
    res.redirect('./new')
  }
}

/**
 * Returns a HTML form for editing a task.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
tasksController.edit = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    const viewData = {
      id: task._id,
      description: task.description,
      done: task.done
    }
    res.render('tasks/edit', { viewData })
  } catch (error) {
    req.session.flash = { type: 'danger', text: error.message }
    res.redirect('..')
  }
}

/**
 * Updates a specific task.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
tasksController.update = async (req, res) => {
  try {
    const result = await Task.updateOne({ _id: req.body.id }, {
      description: req.body.description,
      done: req.body.done === 'on'
    })

    if (result.nModified === 1) {
      req.session.flash = { type: 'success', text: 'The task was updated successfully.' }
    } else {
      req.session.flash = {
        type: 'danger',
        text: 'The task you attempted to update was removed by another user after you got the original values.'
      }
    }
    res.redirect('..')
  } catch (error) {
    req.session.flash = { type: 'danger', text: error.message }
    res.redirect('./edit')
  }
}

/**
 * Returns a HTML form for removing a task.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
tasksController.remove = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    const viewData = {
      id: task._id,
      description: task.description,
      done: task.done
    }
    res.render('tasks/remove', { viewData })
  } catch (error) {
    req.session.flash = { type: 'danger', text: error.message }
    res.redirect('..')
  }
}

/**
 * Deletes a specific task.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
tasksController.delete = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.body.id })

    req.session.flash = { type: 'success', text: 'The task was deleted successfully.' }
    res.redirect('..')
  } catch (error) {
    req.session.flash = { type: 'danger', text: error.message }
    res.redirect('./remove')
  }
}

// Exports.
module.exports = tasksController
