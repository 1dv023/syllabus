## Into the wilds

In this assignment you will be writing a web application where you have to include some real-time web technologies. You should also publish your application on a real (public) production server.

The idea behind the application is that you should be able to list [issues](https://guides.github.com/features/issues/) from your GitHub repository for this examination assignment (e.g. https://github.com/1dvX23/xx222xx-examination-3). You will use this repository for your code but also to test the application by creating issues (and comments) and include these in your application through the [GitHub web API](https://developer.github.com/v3/) and through [GitHub web hooks](https://developer.github.com/webhooks/).

### Assignment goals
The assignment aims to give the student practical and theoretical experience about developing real-time web applications through Web socket and Web hooks. The student should also get practical experience how to put the built web application into production in a secure way.

## Requirements of the application

<img src="https://github.com/1dv023/syllabus/raw/master/examination/exam-assignment-3/application_flow.png" width="80%" />

The image above tries to explain the application flow in this assignment.

1. When a client connects to the application it will contact GitHub through their [web API](https://developer.github.com/v3/) and fetch all created issues on your repository. The response will be in JSON which is a good thing since we are working with Node.js.
2. When your application gets the issue list from GitHub you should use that to render the HTML-page for the client along with the javascript needed for the client.
3. One thing the client-script needs to do is for example the ability to connect to your server´s WebSocket-channel.
4. When a new "issue-event" happens on Github they will fire a (by you) registered HTTP POST which should point to your application.
5. The web hook will send you data and your application should use the web socket channel(s) to update the client in real-time.

### Other requirements
* Your application should be designed with security in mind
  * For instance your code must check that the web hook POST really comes from GitHub.
* Along with your code and installation scripts you should also commit a assignment report that answers some questions (see below)
* Your are free to choose and use third party modules to solve the problem but they should be mention and motivated in your assignment report 

### To handle API keys
To be able to request data from GitHubs web API you must get a API token that identifies yourself. This key must be sent in the Authorization-header in every request so that GitHub could authorize the request. Please notice that this key is personal to your GitHub account. That means that the key should never be stored in a repository or be shared to anyone (not even the teachers).

There are several ways to authenticate your calls to GitHub: https://developer.github.com/v3/#authentication
We are going to use Basic Authentication and you should create a ["Personal access token"](https://github.com/settings/tokens). You allow this key to work with issues and send it along with the correct header.
If you want to use a module for this we could recommend [Octonode](https://www.npmjs.com/package/octonode) that will help you a lot with the API calls.

When you register a callback for the web hook you should also define a secret so that you can validate the hook-requests to your application. This is also one thing to keep secret.
You can solve this in a couple of ways. In this assignment you should **use environments variables**. This way you can read from the environment variables in your application and add it when you start your node-application.

## Production of application
The application shall be running on a public web server in production environment. We recommend using "Digital ocean" which gives all students a own virtual public server but feel free to choose another provider. When doing the examination the application should be able to run on your production server (we will not run it locally) therefor you must add the URL to the application in your repository README.

### Production requirements
* The Node.js application should have a reversed proxy (Nginx) in-front
* The application shall be running through HTTPS (no requirement of buying a domain name so self-signed certificate is OK - fixing a own certificate i preferred)
* The sever should only listen to port 80, 443 and 22(ssh). That means you should not be able to make requests directly to your node application and that all requests goes through the reversed proxy.
* The Node.js application should be running through PM2 and be in production mode
* If you use some kind of installation script on your production server this should be added to your repository

## Assignment report
As a complement to your code you should provide a assignment report. You do this by answering these below questions **in your repositories README**.
* What is the address to your application?
* Describe what you have done to make your application secure, both in code and when configuring your application server
* Describe the following parts, how you are using them and what their purpose is
  * Reversed proxy
  * Process manager
  * TLS certificates
  * Environment variables
* What differs in your application when running it in development from running it in production?
* Which extra modules did you use in the assignment? Motivate the use of them and how you have make sure that they are secure enough for production
* Have you implemented any extra features (see below)? If so, describe them.
  * If you are aiming for a higher grade here is also the chance to motivate it

## Extra features [optional]
For those of you aiming for higher grades in this course there will be some suggestions of extra features that you could implement. 
* First of all - You probably have other ideas...feel free to try them
* Implement more feature for the web client to control the issues through the application (closing issues, adding comments etc.)
* Add some kind of custom authentication before the user can enter the application.
* Do a authentication through [GitHubs OAuth provider](https://developer.github.com/v3/oauth/#web-application-flow) instead of the Basic Authentication. This way a user could log into your applications through their OAuth credentials and see all of their own resources.
  * The user could then choose what repository to watch and the server application creates the web hook through the web API.
* Use a own certificate avoiding using "self-signed certificates"

## Resources
To be able to solve the assignment you may do some reading in the documentation at GitHub. Here are some links:

* https://developer.github.com/v3/issues/
* https://developer.github.com/webhooks/
* https://developer.github.com/webhooks/configuring/


## Examination
Your code will be reviewed during the examination. To pass the exam you must be able to answer questions about your code. 
