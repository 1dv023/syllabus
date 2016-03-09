## Bringing your node.js web application to production

When you have developed a web application you have to put it online so others can use it. In this text I will point out some things that should be noticeable when bringing your application live. This text gives an idea of how to publish your application and gives some tips and tricks about this. Of course there is a lot more to discover in this subject but this text and the belonging demo movies should give you a push in the right direction.

### Using Nginx as a reversed proxy
As you know Nginx is a web server. So why would we like to use a Nginx instance when we already have a web server running in our Node.js program? The fact is that most Node.js developers choose to set up an Nginx server in front of the Node.js application as an reversed proxy, an application that redirects the request to different node applications. This will give us the ability to run more then one Node.js application on our server and let the Nginx decide which calls goes to which server.

```
api.example.com should be proxied to https://localhost:3000
example.com should be proxied to https://localhost:8080
```
It is also known that Nginx is better on handling static content and Node.js/Express.js in better on handling dynamic content which could give us the clue that we should let Nginx handle all of our static content instead of letting express handling it with its middleware. If Nginx handles all request for static files we don´t have to clog the Node.js process down with this.

We could also let the Nginx web server handle HTTPS instead of letting each Node.js application handle this. In this way the Nginx takes the all responsible of encryption and decryption. The request and responses between the Node.js application then could be done with plain HTTP since they are made internal.

To get a more practical view of how you set up an Nginx watch the demo videos that will be published on the course web site.

### Environment variables
Environment variables is a kind of variables you can use on your server and combine with a process running. This is often said to be a good way to add secret hashes to the application instead of storing them in files that could easy be spread around (its easy to check the secrets into a public git repository). This secret hashstrings will be used by the application to produce stuff like session cookies and if someone gets hold of our server secret we re in trouble.

You could set it locally for the server (ubuntu) by typing
```
export MY_VARIBLE="some value"
```
or add it to the process when you start the application
```
MY_VARIBLE="some value" node app.js
```

### Set NODE_ENV to “production”
When running your application you should be sure to run it in the production environment. This is important for performance. This will trigger performance related things in how the application will work. A simple way to do this is to set this variable when you start your application.

```
NODE_ENV=production node app
```
This will start the application in production mode. You can test it in your local setup to check how the application runs in this mode.

### Running right config

Maybe you want your code to act different in different environments. You maybe want to load different databases when when your in development then if your testing or are in production.

```
// When starting the server set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || "development";

```
process.env.NODE_ENV will now tell you in what mode the application is running.
I use to add different environment configs in a own folder and load it at application start
```
var config = require("./config/environment");
```
In the folder ./config/environment I have a separate file for each environment mode i support and a index.js-file for the common configs.

```
-- config
  -- environment
    -- index.js
    -- development.js
    -- production.js
    -- test.js
```
If we look in the index.js it could look like this:

```
'use strict';

var path = require('path');
var _ = require('lodash');

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,

    // Root path of server/application
    root: path.normalize(__dirname + "/../.."),

    // Server port
    port: process.env.PORT || 8000,

    // Should we populate the DB with sample data?
    seedDB: false,
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {}
);
```
When I export the config object in the end I merge (merge is a function in the utility library lodash) the common configs (the object all above) with the current environment file. If I start the application in production it will require the production.js object and merge it into the expected object. The production file could look like:

```
"use strict";

// Production specific configuration
// =================================
module.exports = {
    // Server IP
    ip:    process.env.IP || undefined,

    // Server port
    port:
        process.env.PORT || 3000,

    // MongoDB connection options
    mongo: {
        uri:    "mongodb://localhost/production"
    },
    secrets: {
        secret:     process.env["secret"]
    }
};
```
As you can see this configs are just for the production and we load different values when running in development or test mode. The value for secrets.secret is loaded by a environment variable that should be set on the server (see above).

### console.log in development
Maybe you don´t use console.log or console.error when programing in Node.js but if you do you don´t wanna publish code that calls console.log all over your program. You should avoid this. Of course you could over override the console.log function in production. You could also protect all console.log code by checking a constant like DEBUG_MODE_ON

Another tip is to use the small module ["debug"](https://www.npmjs.com/package/debug) when outputting debug messages. The module let you define when you start your application which files that should output messages...if any. See the documentation for more information about how to use it.
You could write out all the messages when you developing by starting the application with or chose not to output any messages when starting it in production.


### NPM in production
When writing software for the Node.js platform the control over the dependencies is important. You should think about the security and check that all modules you use don´t have any known security issues. The "Node security project" is collecting and get reports of vulnerabilities for most of the modules in the NPM registry. They also provides a tool called "nsp" which you install globally at your system and use to go through all your modules and check them.
For more information get the tool at: https://nodesecurity.io/tools

When running in production you don´t want to install the dev-dependencies listed in your package file. To avoid this be sure to run
```
npm install --production
```
 on the production server or set the NODE_ENV environment variable to production before running npm install.

### Using a production process manager
As you know the Node.js platform crashes the application if we don´t catch thrown exceptions. Of course you should avoid writing software that crashes but in some cases something goes wrong and the main tread can´t handle the error. In this cases our server should restart the application automatically. To help us with this we could use production process managers. There are a couple of this programs to choose from. Maybe [Forever](https://github.com/foreverjs/forever) is the most used but I am more used to work with recommend [pm2](https://github.com/Unitech/pm2). This tool is a bit more advanced and have things like monitoring and load balancer (which we won´t use in this course) and have a lots of features. Pm2 also have a module system for expanding the functionality if you want. For more information read the documentation.

### Avoid in-memory session
When we was implementing session handling in express we used the default way to handle the sessions. We were using in-memory. This means that all sessions were saved in the server memory (RAM). This is not a recommended way to do this since it will leak memory if we got a lot of users. Instead we want to have an other session handler like mongoDB or redis. If you run your server in production mode you will see a notice like this:
```
Warning: connect.session() MemoryStore is not
designed for a production environment, as it will leak
memory, and will not scale past a single process.
```
In this course it is optinal to fix this but if you are you want you can check up this resources:
https://www.npmjs.com/package/connect-redis
Remember that if you use the above package you must have a running [redis](http://redis.io/) server. In [our vagrant](https://github.com/1dv023/node-mongodb-vagrant) this is installed by default.

### More information
The Express.js documentation have a guide where you will find the above tips and some more. The guide is focusing on performance in a production environment. It is well worth a read!
http://expressjs.com/en/advanced/best-practice-performance.html


### Setting up a application on Digital Ocean
To show how to upload and publish your application on a virtual machine hosted at Digital Ocean I have made some videos.

The videos will include:

* Pushing a web socket application to the production server with git
* Setting up a reversed proxy (Nginx) with HTTPS support (self-signed)
* Running the application with PM2 and with environment variables

This videos will be published on the course web site.
