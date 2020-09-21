# ECE-Technologie_web


First Node & Git project


The goal of the lab1 was to create an app which should display a message. This message depended on what the user would insert in the url

This project is composed of :

-index.js : This file is used to create the server.
-handles.js : This file is used to define the server's callback.
-package.json is showing our module declaration.
-README.md 

In this code, we are using an Express application.

The code first imports the Express application object and uses it to get a Router object.
Then, it adds a couple of routes to it using the get() method.
Last of all the module exports the Router object.

To use the router module in our main app file we first require() the route module handles. 
We then call use() on the Express application.




BOUHNIK Raphael - ZYCHOWSKI Adrien