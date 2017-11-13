## Examination 2 - Sticky Snippets

In this assignment, you will create a web application for persistent handling of [programming code snippets](https://en.wikipedia.org/wiki/Snippet_(programming)) using an application framework and an object data modeling library for MongoDB.

##Requirements

The application in [Node.js](https://nodejs.org/en/) will use [Express.js](http://expressjs.com/) as the application  framework and [Mongoose](http://mongoosejs.com/) as  the object modeling library. The application must have full CRUD functionality regarding snippets, whereby a user must be able to create, read, update and delete snippets.

Users must be able to register themselves and must be able to login to the application after entering a user ID and a password. A user cannot register an already existing user ID as user ID is unique for the application. A user must be able to log off from the application it has already logged on to.

Anonymous users will only be able to view snippets. Authenticated users, in addition to view, must also be able to create, edit and delete snippets. **Nobody but the authenticated user should be able to create, edit and delete her/his own snippets.** Because of this the application must support some basic authentication and authorization. Only use of the session store, using the [express-session](https://github.com/expressjs/session) module, is allowed for implementation of authentication and authorization. **You must not use any modules like Passport, etc., to authenticate or authorize.**
When writing and presenting snippets **the application must support multiline text**, meaning the user should be able to write real code snippet, not just a text string.

If a user tries to access a resource which requires the user to be logged in, the application must return the status code 403 (forbidden). Of course, when necessary, the application must also return the status code 404 (not found) as well as 500 (internal error).

As far as possible, the application must be protected from vulnerable attacks. Be prepared to explain and defend your solution at the oral hearing.

As always, we have the following requirements:
* The application should be written as a Node.js application in Javascript following the [JavaScript Standard Style](https://standardjs.com/) 
* The only command the examinator should do to run your application when cloning it from GitHub is `npm install` and `npm start`
* You should work with GitHub and **do several commits** to show how your solution has been made.
* To submit your solution and tell the examinators that you are ready **you must do a release of your code on your GitHub repo** otherwise will you not be able to book a time for the oral hearing.
 

## Setup
You are free to setup your own development environment. You will need a database connection. You are free to use Docker or a connection-string to mLab (see [the database connection text](https://github.com/1dv023/syllabus/blob/master/resources/database-connection.md) for more information)


## Extra features [optional]
For those who wants to expand functionality in the application and get an extra plus on the assignment feel free to do that- Some examples of this could be:
* Add support for [tagging](https://en.wikipedia.org/wiki/Tag_(metadata)) each snippet by one or more tags
* Add support for just showing snippets thats belongs to one tag or/and one user
