"use strict"

// http://expressjs.com/en/4x/api.html#router
let router = require("express").Router();
let Todo = require("../models/Todo");


/**
 * called when we want to list all todos
 */
router.route("/todo/")
    .get(function(request, response) {

      var session = request.session;
      //console.log(session);
      if(session.views) {
        session.views += 1;
      }
      else {
        session.views = 1;
      }

      // first argument is an empty object = no conditions - optional
      // Using callback pattern
      // See http://mongoosejs.com/docs/api.html#model_Model.find for executing with promises
      Todo.find({}, function(error, data) {
      //  console.log(data); // watch this!

        let context = {
          todos: data.map(function(todo) {
            return {
              text: todo.text,
              createdAt: todo.createdAt,
              id: todo._id
            };
          }),
          views: session.views
        };

        response.render("todo/index", context);
      });


    });

/**
 * Chain the diffrent routes to create
 */
router.route("/todo/create")
    .get(function(request, response) {
        // render the form
        response.render("todo/create");
    })
    .post(function(request, response) {
       let todoText = request.body.todoText;

       let todoInstance = new Todo({
         text: todoText,
         createdAt: Date.now()
       });

       todoInstance.save().then(function() {
         response.redirect("/todo");
        }).catch(function(error) {
          // get validation error for example
          throw error;
        });
      });

router.route("/todo/delete/:id")
    .get(function(request, response) {
        // render the form
        response.render("todo/delete", {id: request.params.id});
    })
    .post(function(request, response) {
        Todo.findOneAndRemove({_id: request.params.id}, function(error) {
          if(error) {
            throw new Error("Something went wrong!");
          }
          request.session.flash = {
            type: "success",
            message: "The post was deleted!"
          };
          response.redirect("/todo");
        });

    });
// Exports
module.exports = router;



// Plain middleware
/*
router.get("/todo", function(req, res, next) {
  console.log("Hello before GET /todo!");
  // do something with the GET
  next(); // send to next middleware function in the chain
});
*/
