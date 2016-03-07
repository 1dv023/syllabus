## Bringing your node.js web application to production

When you have developed a web application you have to put it online so others can use it. In this text I will point out some things that should be noticeable when bringing your application live. This text gives an idea of how to publish your application and gives some tips and tricks about this. Of course there is a lot more to discover in this subject but this text and the belonging movies should give you a good kick in the right direction.

### Using Nginx as a reversed proxy
As you know nginx is a web server. So why would we like to use a nginx instance when we already have a web server running in our node.js program.
Most node.js developers chose to set up an nginx server in front of the node.js application as an reversed proxy, an application that redirects the request to different node applications. This will give us the ability to run more then one node.js application on our server and let the nginx deside which calls goes to which server.

```
api.example.com should be proxied to https://localhost:3000
example.com should be proxied to https://localhost:8080
```
It is also known that nginx is better on handling static content and node.js in better on handling dynamic content which could give us the clue that we should let nginx handle all of our static content instead of letting express handling it with its middleware. If nginx handles all request for static files we don´t have to clog the node.js process down with this.

To get a more practical view of how you set up an nginx watch the demo videos below.

### Environment variables
Environment variables is a kind of variables you can use on your server and combine with a process running. This is often said to be a good way to add secret hashes to the application instead of storing them in files that could easy be spread around (its easy to check the secrets into a public git repository)

You could set it locally for the machine your on (ubuntu) by typing

```
export MY_VARAIBLE="some value"
```

or add it to the process when you start the application

```
MY_VARAIBLE="some value" node app.js
```



### Set NODE_ENV to “production”
When running your application you should be sure to run it in the production environment. This is important for performance. This will trigger performance related things in how the application will work. A simple way to do this is to set this variable when you start your application.

```
NODE_ENV=production node app
```
This will start the application in production mode. You can test it in your local setup to check how the application runs in this mode.

### Running right config

Maybe you want your code to act different in different environments. You want to load different databases when when your in development then if your testing or are in production.

```
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || "development";

```
In our application we now can use process.env.NODE_ENV to check in which mode the application runs.
I use to add different environment configs in a own folder and load it at application start
```
var config = require("./config/environment");
```
In the folder ./config/environment i have a separate file for each environment mode i support and a index.js-file for the common configs.

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
When I export the config object in the end I merge the common configs (the object all above) with the current environment file. If I start the application in production it will require the production.js object and merge it into the output. The production file could look like:

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
As you can see this configs are just for the production and we load different values when running in development or test mode. The value for secrets.secret is loaded by a environment variable that should be set on the server.

### console.log in development
Maybe you don´t use console.log or console.error when programing in node.js but if you do you don´t wanna publish code that calls console.log here and there in your program. You should avoid this. Of course you could over override the console.log function in production. You could also protect all console.log code by checking a constant like DEBUG_MODE_ON

Another tip is to use the small module ["debug"](https://www.npmjs.com/package/debug) when outputting debug messages. The module let you define when you start your application which files that should output messages...if any. See the documentation for more information about how to use it.
You could write out all the messages when you developing by starting the application with or chose not to output any messages when starting it in production.


### NPM in production
When writing software for the node.js platform the control over the dependencies is imortant. You should think about the security and check that all modules you use don´t have any known security issues. The "Node security project" is collecting and get reports of vulnerabilities for most of the modules in the NPM registry. They also provides a tool called "nsp" which you install globally at your system and use to go through all your modules and check them.
For more information get the tool at: https://nodesecurity.io/tools

When running in production you don´t want to install the dev-dependencies listed in your package file. To avoid this be sure to run
```
npm install --production
```
 on the production server or set the NODE_ENV environment variable to production before running npm install.

### Using a production process manager
As you know the node.js platform crashes the application if we don´t catch all exceptions. Of course you should avoid writing software that crashes but in some cases something goes wrong and the main tread can´t handle the error. In this cases our server should restart the application automatically. To help us with this we could use production process managers. There are a couple of this programs to choose from. Maybe [Forever](https://github.com/foreverjs/forever) is the most used but I am more used to work with recommend [pm2](https://github.com/Unitech/pm2). This tool is a bit more advanced and have things like monitoring and load balancer (which we won´t use in this course) and have a lots of features. Pm2 also have a module system for expanding the functionality if you want.

### More information
The Express.js documentation have a guide where you will find the above tips and some more. The guide is focusing on performance in a production environment. It is well worth a read!
http://expressjs.com/en/advanced/best-practice-performance.html


### Setting up a application on Digital Ocean
To show how to upload and publish your application on a virtual machine hosted at Digital Ocean I have made this videos.
The videos will include:

* Pushing your application to the production server
* Setting up a reversed proxy (Nginx) with HTTPS support (self-signed)
* Running the application with PM2 and environment variables
