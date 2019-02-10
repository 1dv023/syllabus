'use strict'

const homeController = {}

/**
 * index GET
 */
homeController.index = (req, res, next) => res.render('home/index')

module.exports = homeController
