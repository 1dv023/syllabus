/**
 * Mongoose configuration.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mongoose = require('mongoose')

// DISCLAIMER: This is an example connection string. ALWAYS use an environment variable to store the connection string.
// const CONNECTION_STRING = 'mongodb://<dbuser>:<dbpassword>@ds223605.mlab.com:23605/justtodoit'
const CONNECTION_STRING = 'mongodb://dbuser:rzW6V0ikPyLHIzzFvu9287NaShUyH8@ds223605.mlab.com:23605/justtodoit'

/**
 * Establishes a connection to a database.
 *
 * @returns {Promise}
*/
module.exports.connect = async () => {
  // Get Mongoose to use the global promise library.
  mongoose.Promise = global.Promise

  // Bind connection to events (to get notifications).
  mongoose.connection.on('connected', () => console.log('Mongoose connection is open.'))
  mongoose.connection.on('error', err => console.error(`Mongoose connection error has occurred: ${err}`))
  mongoose.connection.on('disconnected', () => console.log('Mongoose connection is disconnected.'))

  // If the Node process ends, close the Mongoose connection.
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection is disconnected due to application termination.')
      process.exit(0)
    })
  })

  // Connect to the server.
  return mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true })
}
