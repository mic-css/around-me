# Around Me

The **Around Me** web app finds the ten nearest locations to the user and displays information about them using the [Foursquare API](https://developer.foursquare.com/docs/). This includes the location's name and, if present, a photo, a brief description and whether or not it is currently open or closed.

<img src="/screenshots/screenshot.png" width="350">

#### Technologies
* Node.js 6.2.0
* Express.js 4.13.1
* AngularJS 1.5.6
* Sass 3.4.21

## Instructions

#### Build
To install and update dependencies, run:
```sh
$ npm i
```

#### Env variables
**Important:** In order to set environment variables with the API URL, authorization token and version.

The application uses [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables. To set your own, create a `.env` file in the root directory with the following data:
```sh
# .env
API_URL=https://api.foursquare.com/v2/venues
API_TOKEN=EXAMPLEAUTHORIZATIONTOKEN123456789
API_VERSION=20160419
```

#### Run
To run the application, run:
```sh
 $ npm start
```
or, to restart the server automatically on change, install [nodemon](http://nodemon.io/) and run:
```sh
# install nodemon
$ npm i -g nodemon

# run
$ npm run nodemon
```

## Objectives

The purpose of this project was to build a small, single-page, full-stack application that consumed third-party information, processed it and presented a custom API for the front-end.

This posed a good opportunity to get more full-stack javascript experience, particularly with the unfamiliar architectural design of processing a third-party API from the back-end.

Due to limited time, the application was not test-driven or tested, and requires a refactoring.

## Challenges

The primary challenge lay in understanding how to *simplify complex JavaScript code*, especially within the Express framework. It wasn't long before I realised I'd soon be in callback hell, which prompted me to research solutions such as the [async](https://github.com/caolan/async) module and [ES6 Promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise). The codebase, however, is still far from clean, particularly in the back-end, and requires further refactoring and modularisation.

Another issue was *error handling* in JavaScript, which is still lacking in the latest version of the application. The current design requires too many guard clauses and doesn't handle errors in a useful or user-friendly manner. Refactoring will aid this, as well as a better understanding of promises and JavaScript best practices.

*Best practices* are an issue, in my opinion, with more dynamic frameworks such as Express, so it becomes difficult to understand which approach to favour for things such as exporting modules, setting up routes, structuring "classes" and code, and in general whether to favour an *OO or functional* approach.

## Improvements
Further work on the application will focus on:
* Refactoring to leverage best practices and modularization (e.g. `controllers/venues.js`)
* Better error handling and error messages
* Individual location pages with further information, map location, link, etc.
