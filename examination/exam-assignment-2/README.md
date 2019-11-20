In this assignment, you will create a web application for persistent handling of [programming code snippets](https://en.wikipedia.org/wiki/Snippet_(programming)) using an application framework and an object data modeling library for MongoDB.

## Requirements

The application in [Node.js](https://nodejs.org/en/) will use [Express](http://expressjs.com/) as the application framework and [Mongoose](http://mongoosejs.com/) as the object modeling library. The application must have full CRUD functionality regarding snippets, whereby a user must be able to create, read, update and delete snippets.

Users must be able to register and login to the application after entering a username and a password. A user cannot register an already existing username because the username must be unique to the application. A logged in user must be able to log out of the application.

Anonymous users should only be able to view snippets. Authenticated users, in addition to view snippets, must also be able to create, edit and delete their snippets. **No one but the authenticated user should be able to create, edit and delete their snippets.** Because of this, the application must support some basic authentication and authorization.  On the server-side you may only use plain session storage, using the [express-session](https://github.com/expressjs/session) package, to implement authentication and authorization. **You must not use any packages such as Passport, etc., to authenticate or authorize.**

When writing and presenting snippets, **the application must support multiline text**, enabling the user to write real code snippets, not just a one-line text string. The application should be easy to understand, meaning that the users should get clear notifications on what is going on in the application (eg. using flash messages).

If a user tries to access a resource that requires the user to be logged in, the application must return the status code 403 (Forbidden). Of course, when necessary, the application must also return the status code 404 (Not Found) as well as 500 (Internal Server Error).

As far as possible, the application must be protected from vulnerable attacks. Be prepared to explain and defend your solution at the oral hearing.

As always, we have the following requirements:

* The application should be written as a JavaScript application following the [JavaScript Standard Style](https://standardjs.com/) code standard, using the Express API, running on the Node.js platform.
* The only command that the examiner will need to execute to run your application after cloning it from GitHub is `npm install` and `npm start`.
* You must use GitHub, and make several commits, to show how your completed assignment has evolved from the start to the end.
* To announce that you have completed the assignment, you must create a release of your examination repository on GitHub. If a release is missing the examinators will not grade your assignment.

## Setup

You are free to set up your development environment. You will need a database connection. You are free to use Docker or a connection-string to mLab (see [the database connection text](https://github.com/1dv023/syllabus/blob/master/resources/database-connection.md) for more information)

## Extra features [optional]

For those who want to expand functionality in the application and get an extra plus on the assignment, feel free to do that. Some examples of this could be:

* Add support for [tagging](https://en.wikipedia.org/wiki/Tag_(metadata)) each snippet by one or more tags.
* Add support for just showing snippets that's belongs to one tag or/and one user.
