# Vagrant
You should be familiar with vagrant. Otherwise do a heads-up [here]
(https://coursepress.lnu.se/kurs/klientbaserad-webbprogrammering/resources/virtualization/).

We have notice that Vagrant, Virtual box, node/npm and Windows don´t work so great
together. Most developing tools are written for unix-based systems and sometimes
Windows users have problem running them (mostly because of the different file systems).

We will provided a pretty clean vagrant file in this course since you should try to install the different stuff by your self to get that knowledge. It will probably work fine on mac and linux machines but could have some problem when you run it on Windows, especially when running "npm install".

If you´re a Windows user you could try using the vagrant file and when you installing modules/packages add the --no-bin-links flag.

```
npm install express --no-bin-links
```
or read [this article](http://blog.prolificinteractive.com/2015/01/21/getting-vagrant-nodejs-windows-play-well-together/) and see if this helps.

Otherwise just don´t use vagrant and install node and run it in your local file system. It will mean that stuff will be installed on your own operating system but if you don´t install to many global packages that probably is OK.
