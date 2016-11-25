## Taking real-time issues into the wilds

In this assignment you will be writing a web application where you have to include some real-time web technologies. You should also publish your application on a real (public) production server.

The idea behind the application is that you should be able to list [issues](https://guides.github.com/features/issues/) done at your GitHub repository for this examination assignment (e.g. https://github.com/1dv523/xx222xx-examination-3). You will use this repository for your code but also to test the application by creating issues (and comments) and include these in your application through the GitHub web API and through GitHub webhooks.

### The application

![image of the application](https://github.com/1dv023/syllabus/raw/master/examination/exam-assignment-3/application_flow.png)

The image above tries to explain the application flow.

1. When a client connects to the application it will contact GitHub through their [web API](https://developer.github.com/v3/) and fetch all created issues on your repository. The response will be in JSON which is a good thing since we are working with Node.js.
2. When your application gets the issue list from GitHub you should use that to render the HTML-page for the client along with the javascript needed for the client.
3. One thing the client-script needs to do is for example the ability to connect to the servers WebSocket-channel.
4. When a new "issue-event" happens on Github they will fire a (by you) registered HTTP POST which should point to your application.
5. The webhook will send you data and your application should use the websocket channel(s) to update the client in real-time.


### To handle API keys
To be able to request data from GitHubs web API you must get a API key. This key must be sent in the Authorization-header in every request so that GitHub could authorize the request. Please notice that this key is personal to your GitHub account. That means that the key should never be stored in a repository or be shared to anyone (not even the teachers).

There are several ways to authenticate your calls to GitHub: https://developer.github.com/v3/oauth/
We are going to use Basic Authentication and you should create a ["Personal access token"](https://github.com/settings/tokens). You allow this key to work with issues and send it along with the correct header.

When you register a callback for the webhook you should also define a secret so that you can validate the hook-requests to your application. This is also one thing to keep secret.

You can solve this in a couple of ways. In this assignment you should use environments variables. This way you can read from the environment variables in your application and add it when you start your node-application.

### Resources
To be able to solve the assignment you may do some reading in the documentation at GitHub. Here are some links:

* https://developer.github.com/v3/issues/
* https://developer.github.com/webhooks/
  * https://developer.github.com/webhooks/configuring/

### Extra features
For those of you aiming for higher grades in this course there will be some suggestions of extra features that you could implement.
* First of all - You probably have other ideas...feel free to try them
* Implement more feature for the user to control the issues through the application (closing issues, adding comments ect.)
* Add some kind of custom authentication before the user can enter the application
* Do a authentication through [GitHubs OAuth provider](https://developer.github.com/v3/oauth/#web-application-flow) instead of the Basic Authentication. This way a user could log into your applications through their OAuth credentials and see their own resources.
  * The user could then choose what respository to watch and the server application creates the web hook through the web API.

### Assignment goals
The assignment aims to give the student practical and theoretical experience about developing real-time web applications through Websocket and Webhooks. The student should also get practical experience how to put the built web application into production.

### Examination
Your code will be reviewed during the examination. You to pass the exam you must be able to answer questions about your code. There will also be an oral examination with more theoretical questions.
