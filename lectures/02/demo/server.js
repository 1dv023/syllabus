"use strict";

let express      = require("express");
let bodyParser   = require("body-parser");
let exphbs       = require("express-handlebars");
let path         = require("path");

let app  = express();
let port = process.env.PORT || 8000;

// Configuration ----------------------------------------------------

// View engine.
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

// Add support for handling application/json
app.use(bodyParser.json());

// Add support for handling HTML form data
app.use(bodyParser.urlencoded({ extended: true }));

// The framework should look in the folder "public" for static resources
app.use(express.static(path.join(__dirname, "public")));

// Load routes as "mini-apps"
app.use("/", require("./routes/home.js"));
app.use("/", require("./routes/todo.js"));

// Error handling ------------------------------------------------------

app.use(function(request, response, next) {
  // Should have own view?
  response.status(404).send("error/404");
});

// four parameters for errors
app.use(function(err, req, res, next) {
  // log the error
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Launch application --------------------------------------------------
app.listen(port, function () {
  console.log("Express app listening on port %s!", port);
});