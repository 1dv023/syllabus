## How to set up your MongoDB

In this course, we will not talk much about databases, but we will develop applications that use the [MongoDB](https://www.mongodb.com/) document database. In order for your application to use MongoDB, you must have a database server. Of course, you can install and run a database server on your local machine, but that's not a good way to do it. There are several options to choose from and you are free to choose the one that suits you.

### Use a DaaS (data as a service)

>This is clearly the simplest solution. If you want to learn more and maybe find a more general way to build different development solutions, check out the Docker solution below. As a developer, Docker is probably something you should try even if it is not within the scope of this course.

A DaaS is a service where you can connect to a database server in the cloud.

You do not need to install and configure anything, just register an account and start working on it. Free accounts are probably enough for this type of assignment. In real production, however, you should strive for a better alternative.
In this course, it is appropriate to use [MongoDB Atlas](https://mongodb.com/cloud/atlas). To get started just follow the guide [Getting Started with MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) (some alternative resources [How to use MongoDB Atlas?](https://kaloraat.com/articles/how-to-use-mongodb-atlas), [MongoDB: A Beginner’s Guide](https://medium.com/@bretcameron/mongodb-a-beginners-guide-8fca0c7787a4)).
  
### Use Docker containers

 Install and run Docker containers. Docker is a very popular choice when running applications (not just Node.js application). If you are interested in learning more about Docker (you should be - but it is out of the scope of this course) please read [Introduction to containers and Docker](https://github.com/CS-LNU-Learning-Objects/web-application-architecture/blob/master/containers.md).

To get started with Docker follow our guide [Node MongoDB Docker](https://github.com/thajo/docker-compose-node-mongodb/).
