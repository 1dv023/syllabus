"use strict";

let express      = require("express");
let bodyParser   = require("body-parser");
let exphbs       = require("express-handlebars");
let path         = require("path");
let session      = require("express-session");

let app  = express();
let port = process.env.PORT || 8000;

// Configuration ----------------------------------------------------

// Kick off the database
require("./libs/dbHelper").initilize();

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


app.use(session({
    name:   "theserversession",  // Don't use default session cookie name.
    secret: "K7smsx9MsEasad89wEzVp5EeCep5s", // should be kept secret
    saveUninitialized: false, // save/or not save a created but not modified session
    resave: false, // resave even if a request is not changing the session
    cookie: {
        secure: false, // should be true to check that we´re using HTTPS - Im not in this case
        httpOnly: true, // dont allow client script messing with the cookie
        maxAge: 1000 * 60 * 60 * 24 // will live for 1 day
    }
}));

// Adding support for flash messages through the middleware pattern
app.use(function(request, response, next) {
  // The flash should live for one roundtrip so if it is set in the session
  // add it to the context (this request through locals)
  if(request.session.flash) {
    response.locals.flash = request.session.flash;
    // then delete it from the session
    delete request.session.flash;
  }
  next();
});

// Adding support for stupid render message (every request)
app.use(function(request, response, next) {
  // Always use a namespace for this
  if(!response.locals.partials) {
    response.locals.partials = {};
  }
  // This could be
  response.locals.partials.sponsor = {name: "Acme AB"};
  next();
});


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
