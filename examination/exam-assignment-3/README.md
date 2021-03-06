In this assignment, you will be writing a web application where you have to include some real-time web technologies. You should also publish your application on a real (public) production server.

The idea behind the application is that you should be able to list [issues](https://docs.gitlab.com/ee/user/project/issues/) from your GitLab repository for this assignment (e.g., <https://gitlab.lnu.se/1dvX23/xx222xx/assignment-3>). You will use this repository for your code but also test the application by creating issues (and comments) and include these in your application through the [GitLab API](https://docs.gitlab.com/ee/api/api_resources.html) and [webhooks](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#overview).

> Do you want to use GitHub instead of GitLab? [Read the instructions for GitHub instead](https://coursepress.lnu.se/kurs/serverbaserad-webbprogrammering/assignment-3-github/).

### Assignment goals

The assignment aims to give the student practical and theoretical experience about developing real-time web applications through Web socket and webhooks. The student should also get practical experience on how to put the built web application into production in a secure way.

## Requirements of the application

<img src="https://github.com/1dv023/syllabus/raw/master/examination/exam-assignment-3/application_flow2.png" width="80%" />

The image above tries to explain the application flow in this assignment.

1. When a client connects to the application, it will use GitLab API (https://docs.gitlab.com/ee/api/README.html), a REST API, and fetch all created issues on your repository. The response will be in JSON, which is good because we work with Node.js.
2. When your application gets the issue list from GitLab, you should use that to render the HTML-page for the client along with the JavaScript needed for the client.
3. One thing the client-script needs to do is, for example, the ability to connect to your server´s WebSocket channel.
4. When a new "issue-event" happens on GitLab, they will fire a (by you) registered HTTP POST, which should point to your application.
5. The webhook will send you data, and your application should use the web socket channel(s) to update the client in real-time.

### Other requirements

* Design your application with security in mind.
  * For instance, your code must check that the webhook POST comes from GitLab.
* Along with your code, and installation scripts, you should also commit an assignment report that answers some questions (see below).
* You are free to choose and use third-party packages to solve the problem, but they should be mention and motivated in your assignment report.

We also have the following requirements:

* The application should be written as a Node.js application in JavaScript following the code and JSDoc conventions the course uses ([@lnu/eslint-config](https://www.npmjs.com/package/@lnu/eslint-config)), using the Express web framework.
* You must use GitLab, and make several commits, to show how your completed assignment has evolved from the start to the end.
* To announce that you have completed the assignment, you must make a release of your assignment at its repository on GitLab. If a release is not made, the assignment will not be assessed.

### To handle API keys

To be able to request data from GitLab API, you must get an API token that identifies yourself. Send the key in the Authorization header in every request so that GitLab could authorize the request. Please note that this key is personal to your GitLab account. That means that the key should never be stored in a repository or shared with anyone (not even the teachers).

There are several ways to authenticate your calls to GitLab: <https://docs.gitlab.com/ee/api/README.html#authentication>
We are going to use Basic Authentication, and you should create a ["personal access token"](https://docs.gitlab.com/ee/api/README.html#personal-access-tokens). You allow this key to work with issues and send it along with the correct header.

When you register a callback for the webhook, you should also define a secret so that you can validate the hook-requests to your application. This is also one thing to keep secret.
You can solve this in a couple of ways. In this assignment, you should **use environment variables**. This way, you can read from the environment variables in your application and add it when you start your node-application.

## Production of application

The application shall be running on a public web server in a production environment. Each student will get their virtual public server (see the production part of this course), but feel free to choose your provider. During the examination, the application should be able to run on your production server (we will not run it locally) therefore, you must add the URL to the application in your repository README.

### Production requirements

* The Node.js application should have a reversed proxy (Nginx) in front.
* The application shall be running through HTTPS (no requirement of buying a domain name, so the self-signed certificate is OK - fixing an own certificate I preferred).
* The server should only listen to port 80, 443, and 22(ssh). That means you should not be able to make requests directly to your node application and that all requests go through the reversed proxy.
* The Node.js application should be running through PM2 and be in production mode.
* If you use some kind of installation script on your production server, this should be added to your repository.

## Assignment report

As a complement to your code, you should provide an assignment report. You do this by answering the following questions **in your repositories RELEASE.md**.

* What is the URL to your application?
* Describe what you have done to make your application secure, both in code and when configuring your application server.
* Describe the following parts, how you are using them, and what their purpose is in your solution:
  * Reversed proxy
  * Process manager
  * TLS certificates
  * Environment variables
* What differs in your application when running it in development from running it in production?
* Which extra modules did you use in the assignment? Motivate the use of them and how you have to make sure that they are secure enough for production.
* Have you implemented any extra features (see below) that could motivate a higher grade of this assignment? If so, describe them.

## Extra features [optional]

For those of you aiming for higher grades in this course, there will be some suggestions for extra features that you could implement.

* First of all - You probably have other ideas feel free to try them.
* Implement a richer web client that can control the issues through the application (closing issues, adding comments, etc.). Think about security!
* Add some kind of custom authentication before the user can enter the application.
* Do an authentication through [GitLab's OAuth provider](https://docs.gitlab.com/ee/api/oauth2.html) instead of the Basic Authentication. This way, a user could log into your applications through their OAuth credentials and will see all of their resources.
  * The user could then choose what repository to watch, and the server application creates the webhook through the web API.

## Resources

To be able to solve the assignment, you may do some reading in the documentation at GitLab. Here are some links:

* <https://developer.github.com/v3/issues/>
* <https://developer.github.com/webhooks/>
* <https://developer.github.com/webhooks/configuring/>
* <https://serveo.net/> - Alternative to ngrok for exposing local server when developing with web-hooks

## Examination

During the examination, your code will be reviewed. To pass the exam, you must be able to answer questions about your code.
