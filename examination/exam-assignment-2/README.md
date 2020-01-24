In this assignment, you will create a web application for persistent handling of [programming code snippets](https://en.wikipedia.org/wiki/Snippet_(programming)) using an application framework and an object data modeling library for MongoDB.

## Requirements

The application in [Node.js](https://nodejs.org/en/) will use [Express](http://expressjs.com/) as the application framework and [Mongoose](http://mongoosejs.com/) as the object modeling library. The application must have full CRUD functionality regarding snippets, whereby a user must be able to create, read, update, and delete snippets.

Users must be able to register and login to the application after entering a username and a password. A user cannot register an already existing username because the username must be unique to the application. A logged-in user must be able to log out of the application.

Anonymous users should only be able to view snippets. Authenticated users, in addition to view snippets, must also be able to create, edit, and delete their snippets. **No one but the authenticated user should be able to create, edit and delete their snippets.** Because of this, the application must support some basic authentication and authorization.  On the server-side, you may only use session storage, using the [express-session](https://www.npmjs.com/package/express-session) package, to implement authentication and authorization. **You must not use any packages such as Passport, etc., to authenticate or authorize.**

When writing and presenting snippets, **the application must support multiline text**, enabling the user to write real code snippets, not just a one-line text string. The application should also be easy to understand, meaning that the users should get clear notifications on what is going on in the application (e.g., using flash messages).

If a user tries to access a resource that requires the user to be logged in, the application must return the status code 403 (Forbidden). Of course, when necessary, the application must also return the status code 404 (Not Found) as well as 500 (Internal Server Error).

As far as possible, the application must be protected from vulnerable attacks. Be prepared to explain and defend your solution at the oral hearing.

As always, we have the following requirements:

* The application should be written as a Node.js application in JavaScript following the code and JSDoc conventions the course uses ([@lnu/eslint-config](https://www.npmjs.com/package/@lnu/eslint-config)), using the Express web framework.
* The only command that the examiner will need to execute to run your application after cloning it from its repository is `npm install` and `npm start`.
* You must use GitLab, and make several commits, to show how your completed assignment has evolved from the start to the end.
* To announce that you have completed the assignment, you must make a release of your assignment at its repository on GitLab. If a release is not made, the assignment will not be assessed.

## Setup

You are free to set up your development environment. You need access to a document database, using Docker or a DaaS (see [How to set up your MongoDB](https://github.com/1dv023/syllabus/blob/master/resources/database-connection.md) for more information).

## Extra features [optional]

For those of you who want to add extra functionality to the application, and get an extra plus on the assignment, feel free to do that. Some examples of this could be:

* Add support for [tagging](https://en.wikipedia.org/wiki/Tag_(metadata)) each snippet by one or more tags.
* Add support for just showing snippets that's belongs to one tag or/and one user.
