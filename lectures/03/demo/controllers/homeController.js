/**
 * homeController.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict'

const homeController = {}

/**
 * index GET
 */
homeController.index = (req, res, next) => res.render('home/index')

// Exports.
module.exports = homeController
