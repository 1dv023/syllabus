"use strict";

let mongoose     = require("mongoose");

module.exports = {
    initilize : function() {
      // reed db Configuration
      var dbConfig = require("../config/database.js");
      var db = mongoose.connection;

      // mayby should remove out from this file - EventEmitters?
      db.on("error", console.error.bind(console, "connection error:"));

      db.once("open", function() {
        console.log("Succesfully connected to mongoDB");
      });

      // Connect to the database.
      mongoose.connect(dbConfig.connectionString);
    }
};
