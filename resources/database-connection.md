## How to set up your mongoDB
In this course we will not talk a lot about databases but we are going to develop applications that are using the document database [mongoDB](https://www.mongodb.com/). To get your application running with a mongoDB you have to have a database server. Of course you can install and run a database server on your local machine but that is not a good way - and not the way we want it in this course. We have to solutions and you are free to choose the one you want.

1. Using a DaaS (Database as a Service). This is a service where you can get a connection to a database server in the cloud. You don´t have to install and configure anything, just register create an account and start working with it. The free accounts will probably be enough for this kind of assignment. In real production you should strive for a better option though.
For this course we can recommend using the service: https://mlab.com/
  
  * Create an account, using the sandbox plan is enough for this course.
  * You will get a database to which you could connect to through a MongoDB URI. You will find your URI when you logged in.
  * Use this URI when making a connection through mongoose and you should be able to write and read your persistent data there. 

This is clearly the most simple solution for this course. If you want to learn more and get a way to easy build different development solutions you should check out the Docker solution below. As a developer Docker probably is something you shuld try out even if it is out of scope of this course.

2. Install and run Docker containers. Docker is a very popular choice when running applications (not just node.js application). If you are interested of learning more about Docker (you should be - but out of scope for this course) please read this introduction: https://github.com/CS-LNU-Learning-Objects/web-application-architecture/blob/master/containers.md

To get started with Docker follow our guide at:
https://github.com/thajo/docker-compose-node-mongodb/
