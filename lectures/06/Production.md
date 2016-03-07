## Bringing your work to the people
This text will discuss the area of bringing your application to a public server. This text is written in a more general context and some of the concepts is beyond this course to implement in practice but should be something a backend developer should know about. This text has a focus on bigger more complex web applications developed by a team of person. In our course we work with smaller applications and you work as a own developer. The aim of this text is to get you familiar with the concepts.

For a more practical text with focus on node.js and this course please read: ADD

### Publishing your application
For most web developers the common way to publish the application is buying a domain name and a space at a web hosting service (swe: webbhotell). There you got a space on a web server shared with others and configured with some common technologies like PHP or ASP.NET. You then open up a FTP (File Transfer Protocol) program and start to upload all your code files. When the application should updates you upload the changed files to the server that executes them. This approach still works for smaller sites with a very small team of developers.

If your a developer in a more serious company you probably don't use this way. If you do...stop. Some companies host there own servers (infrastructure) and some companies buys virtual servers from cloud services like [AWS](https://aws.amazon.com/) or [Digital Ocean](https://www.digitalocean.com/).

One thing can be said. As a web developer your knowledge about how to publish your code have been an important part. That is why we adding this part to this course.
Today you see projects that tries to automate the workflow from developer to production to quick up the way from idea to implemented feature ready for customers to test.
The [devops](https://en.wikipedia.org/wiki/DevOps) movement form new way of thinking when producing software especially for web developers. Today more and more tools are being used in the web development to automate things and help with code quality. This goes especially for the javascript community where you have to know your tools, your terminal and your workflows. Other platform may have more visual tools like .NET and JAVA. As a web developer it is important to have some knowledge about this workflows, the different steps and how to configure  stuff.


### The continuous way
In todays web development bringing your code into production is a important step where we want to avoid issues and problems at a early stage and not copy over all our files in a big transfer and hope for the best. This field have been evolving a lot in the last couple of years in the field of web applications deployment.

We often want to automate many of the step we do when we develop our applications, things like testing, pushing to staging server, pushing to production server and so on. When we working with web application we in most cases don´t work with release cycles as you do with traditional desktop applications. You often work more feature-based where you can deploy many features to the customer in a day. To do this you need a automated workflow that catches issues early on so we avoid getting buggy code in production.

There are a lot of different concepts and words to get a grip of. Here follow some of them:

* Production server - The server where we put the application
* Staging server - A server that runs just like the production server where we can push or code to simulate the application running in the exact same environment as on the production server. This server often is where the test team test the use cases the application have.
* Continuous integration (CI) server - A server that help us with automatic testing to know if the code is ok to merge in a shared code base. Example of servers for this is [Travis](https://travis-ci.org/), [Strider](https://github.com/Strider-CD/strider) and [Jenkins](https://jenkins-ci.org/). A CI server is the gatekeeper that helps keep a tab on code quality and helps the developers in a team to not break the build.

With these in mind we can move on to discuss some other concepts you could run into as a web developer working in a bigger team for a company or in a open source project.

#### [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)
This is the process of merging development code with the master (the main branch for the code) several times a day. This will help catch early issues and prevent us from all the problem a bigger integration will do. Here are automated testing a key factor. All code that goes into the master should have been tested by tests written in code. When a developer tries to merge her/his code into the master the test should runs and the merge should fail if there were errors. You have maybe seen the badge "build passing" on some github repos. These indicates that the last build/push have passed all test on the CI server and telling the world/team that the code is ok.

BILD

There are lots of CI servers but if your are interested to try a CI server out I would recommend [travis](http://travis-ci.org) which is a online service with integration to GitHub. Travis is also included in your GitHub developer pack if you want to run private repos.

#### Continuous delivery
This is the part of delivering code to an environment. Whether it is to a staging server were a QA (Quality assurance) team can test the application or to a production server where customers use the application. The staging server is a place just before the production server where the application can be tested automatically by software and by QA people that reviews the application from a set of test methods and metrics. If there are problems the developers get to know about it and will fix it otherwise the code could manual be pushed to production. The main focus is to go from developers to a stage where the code that has been developed through this workflow should be ready for production.

BILD

#### Continuous deployment
The next step is continuos deployment. This way is a more automated step then continuous delivery. When a developer push his changes to the source control (GitHub) a trigger is run that send the code over to a continuous integration server that runs all testing (unit, acceptance, ...) and if succeeded the code is pushed over to the production server (or staging server) automatic. So its about full automation to get small features quickly and well tested to production

BILD

## After deploying
Running web applications is not only about writing code and publish it to some server. The Maintaining of a application is a big thing. A application is a living thing and don´t think that you should write the whole application in developer mode and then publishing and think you are ready. You don´t know how your customers are going to use the application, which features they missing and which feature the don´t need. This is one thing to analyze but we also have the thing of catching bugs in production.

As you can see of the descriptions above the processes support a way to get features into the main product in a fast way. This will detect issues early on and will support quick fixes if bugs or errors find their way into the product (they will). Therefor it is important to think about also catching errors and problems in the wild, on the running application(s) on the production server.

### Monitoring
Monitoring is the idea that you as a service owner observe your application and look that the application is running as expected or observe how the users integrate with the application and give information how improvements can be made.

We could monitoring how the hardware in the server is working and trigger events when specific things happened like if the CPU is over used, some service is down etc. That could trigger a script that notifies the developers.
There is a lot of advanced software for this use. We are not digging deeper in this subject in this course.

### Logging
Our application should have a central logging on whats going on. The logs gives us a opportunity to view and search whats happened in the application in the history. The logs a usually saved to some kind of file in the filesystem and should be messages that the application writes down through out users are using the application. This log messages is of value when trying to find undetected bugs or other kind of problems. The logging should be on a central server so we can support multiple application server and we don´t risk that the log get corrupt if they are on a application server that breaks down.


### Other considerations

#### Optimizing
Many times one don´t focus and spending time on to much optimizing when developing the first version of the application. It´s hard to find all things to optimize before we analyze how the users will use our application (if they will use it at all). Therefore optimization is a process that is continued after the first release. Of course we try to write good and effective code in the first place but we maybe shouldn't expect 100.000 page views in the beginning but we need to be prepared if that happened and our code and planing should be able to handle this. This has been a big problem for many companies that all of a sudden get a big amount of user, more then the application and infrastructure can handle. This leads to slow performance and the users start to be annoyed and quit using the service.
We could also be in a situation where we have suddenly peaks where the load of the application is extremely high. In the world of cloud computing and virtualization solutions could be to by more virtual machines at these times and just pay for the power you need when you need it. But we need to plan our infrastructure to handle this.

Don´t forget stuff like compression, caching of static resources.

##### Load balancing
One way to handle high traffic is using a load balancer. It is a way to balance the traffic over more then one application/web server. This will of course be better since we get a more even traffic to each server but it also help us if one of our application server breaks down. The load balancer can detect this and shuffle the request to the other servers.

##### Cache servers
A cache server is a dedicated server that holds web data locally. Think if our web site have a start page that makes a couple of database calls to render the dynamic page. probably these database calls get the same data most of the times. We could optimize this by caching the render page for a while and serving most of the client requests the caches (and static page). This will increase the speed considered and will take the workload of the database server and application server.

#### Security
The security in a web application is of course a very important bit. Our code should be safe from attack vectors. We should also think about the persistent data and the responsibility we have to keep it safe. We probably have one or more database servers running and keeping the data on the disk. But what if the database breaks down and the data gets corrupt? Of course we should have a backup system that repeatedly takes backups of the data and put it in a safe place. This will support the idea of having a recovery plan.
