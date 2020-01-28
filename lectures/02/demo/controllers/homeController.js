/**
 * Home controller.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

const moment = require('moment')

const homeController = {}

/**
 * Renders a view with a form.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
homeController.index = (req, res) => {
  res.render('home/index')
}

/**
 * Renders a view with posted data.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
homeController.indexPost = (req, res) => {
  const viewData = {
    name: req.body.name,
    dayName: moment().format('dddd')
  }

  res.render('home/index', { viewData })
}

module.exports = homeController
