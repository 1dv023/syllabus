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
 * index GET
 */
homeController.index = (req, res, next) => res.render('home/index')

/**
 * index POST
 */
homeController.indexPost = (req, res, next) => {
  const viewData = {
    name: req.body.name,
    dayName: moment().format('dddd')
  }

  res.render('home/index', { viewData })
}

module.exports = homeController
