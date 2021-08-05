# BRIDGE-API
 Make Backend Food Delivery App With Express.js 
 <h1 align="center">ExpressJS - BRIDGE-API</h1>



Food Delivery App is a simple Food Delivery application specially for backend only. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.14.15-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Open Postman desktop application or Chrome web app extension that has installed before
5. Choose HTTP Method and enter request url.(ex. localhost:3000/item)
6. You can see all the end point [here](#end-point)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
FLICKR_URL= https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1
```

## End Point
**1. GET**
* `/flickr`
* `/flickr/:id` (search flickr by tags)

