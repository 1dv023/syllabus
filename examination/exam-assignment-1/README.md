In this assignment, the task is to write a [web scraper](https://en.wikipedia.org/wiki/Web_scraping) that scrapes but also analyzes information on some web sites built especially for this assignment. The idea is that you are going to write a scraper/agent that solves a specific problem.

You will get the main page to proceed from, which links to three different web sites. You don't have to care about how they work internally, just the HTML they are rendering, and how to form your HTTP request to get the data you want for analyzing.

Your starting point is **<http://vhost3.lnu.se:20080/weekend>**, which should also be the starting point in your scraping script, meaning that no other hardcoded URLs must be used in your code (except for the AJAX call in the *cinema* site). Your scraping script should also be able to handle the alternative server (see below).

## Scenario

The three friends Peter, Paul, and Mary usually get together one weekend every month to see a movie and, after that, eat at a restaurant. The problem is that it is hard to plan this event since they must find a time slot when all three are available, look for a movie that plays at the cinema that day, and finally see if they can book a table at their favorite restaurant. Since all this information is available through HTTP requests, it would be nice to have a script that automates this workflow!

And that's your task...

### The web sites

Your script should start to scrape the links at the starting-URL and continue from there. This starting-URL should be easy to change when running your script. Remember that we are going to examine your scraper against another server when grading your assignment. As mentioned before, from this URL, your application/web scraper should be able to crawl all three applications by itself. The scraper should be able to scrape all information, analyze it, and present a solution to the user in the right way. Of course, there will be some points internally in the web sites where you will have to hardcode, but try to write it as general as possible (see examinations for more info).

#### The calendar

The first web site is where the three friends are syncing their *calendar*. Each of the friends has their page, where he/she can edit the information to let others know what day of the weekend is free. These pages are built with simple HTML, and the task is to scrape the pages and analyze what (if any) day(s) all three friends are free. The friends are only available to see each other on the weekends (Friday, Saturday, Sunday), so there is no need to handle other days.

#### The cinema

The *cinema* web site is a simple web site that displays the cinema's shows for the weekend. You can get which day and at which time a specific movie is running, and if it is fully booked or not. **By analyzing the traffic between the client and the server, you should be able to find a way to request this information** and use it in your code, together with the data from the *calendar* site. Use the browser's inspector to analyze the traffic.

#### The restaurant

The third web site is the three friends' favorite *restaurant* (the only one they visit..!). To see this site, you must log in first. For this you can use the credentials below:

* Username: **zeke**
* Password: **coys**

The site will use session **cookies** for authorization, which your application must handle in some way. After this, you can see the available booking times, which you should analyze with the other data to propose a final solution.

## The workflow to automate

* Check which day or days all friends are available; if none - output this on screen
* Get the available movies for that day(s)
* Login to the restaurant web site and get the content
* See when the three friends can eat. Think that they want to book a table **minimum two hours after the movie starts.**
* Present the solution(s) as output in your terminal/console window (or as an HTML view)
* [Optional] - Use the form for a user to book a table with your application

## What the application must look like

Start the application passing the start URL <http://vhost3.lnu.se:20080/weekend> as an argument to the process.

```shell
npm start http://vhost3.lnu.se:20080/weekend
```

The output of your application must be exact:

```shell
Scraping links...OK
Scraping available days...OK
Scraping showtimes...OK
Scraping possible reservations...OK

Recommendations
===============
* On Friday the movie "Keep Your Seats, Please" starts at 16:00 and there is a free table between 18:00-20:00.
* On Friday the movie "A Day at the Races" starts at 16:00 and there is a free table between 18:00-20:00.
```

The output should not be more "verbose" than this. Be sure to remove all your other `console.log` calls before making your release. The recommendations shown above is the correct one for the current state of the sites, and you can use it to check your solution. Be sure to test your application using the alternative server.

### Using the alternative server

We have provided an alternative server where we have changed information and some URLs. Your application must also work with this server. The alternative start URL is **<http://cscloud304.lnu.se:8080>** and the output must be exact:

```shell
Scraping links...OK
Scraping available days...OK
Scraping showtimes...OK
Scraping possible reservations...OK

Recommendations
===============
* On Saturday the movie "Keep Your Seats, Please" starts at 18:00 and there is a free table between 20:00-22:00.
* On Sunday the movie "Keep Your Seats, Please" starts at 18:00 and there is a free table between 20:00-22:00.
```

## Requirements of your solution

* The application should be written as a Node.js application in JavaScript following the code and JSDoc conventions the course uses ([@lnu/eslint-config](https://www.npmjs.com/package/@lnu/eslint-config) You have to install and configure the lint tools yourself (your initial repo will be empty). The examiner should be able to run `npm run lint` in the console to see that there are no errors (or warnings).
* The only command the examiner should use to run your application after cloning it from it's repository is `npm install` and `npm start` (with the starting URL as a parameter).
* You should work with GitLab and **do several commits** to show how your solution has been made.
* You are free to find and use external modules.
* You must structure your code so **you must create at least use three own modules**.
* The application **should be able to take a parameter with the start URL** so one easy could change servers when running the examination.
* Try to make a solution that is as general as possible. We will provide an alternative server that your script also should pass (see below). This is to test that your code is general for different scenarios. **The HTML structure will never be changed** but there could be changes in:
  * `href` attributes in HTML: To check that your scraper doesn't use hardcoded URLs. URLs only defined in JavaScript code (as in the AJAX and *cinema* example) will not be changed so that you can hardcode these.
  * The day(s) all three friends will be available (remember: if none, the application should give the end-user a message about that).
  * The movie titles, their time, and if they are fully booked or not.
  * The availability of tables at the restaurant and the redirect URL we get when we log in.
* To submit your solution and tell the examiners that you are ready **you must create a release of your code at your repository**, otherwise will you not get feedback. Solutions without a release will be ignored!

## Examination

There will not be an oral examination combined with this assignment. The examiners will tell you if your solution has **Pass** or **Fail** through an issue on your repository.

## Goals for this assignment

* Get practical experience in building a web scraper.
* Get knowledge about HTTP and use it when building an application in Node.js.
* Analyze the traffic between the client and the server.
* Get practical knowledge of asynchronous programming in Node.js.
* Analyze and solve a problem with JavaScript code.
* Using Git to show progress in your work.
