# Description

A user can select a country from a list of countries, and see the top 5 headlines for that country.

# Prerequisites

You'll need to have [installed Nodejs and the Node Package Manager (NPM)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node) in order to run the Express server

# Installing and running the app

To run the client:

```
cd client
npm install
npm start
```

And the server:

```
cd server
npm install
npm start
```

# Running tests

Both the client and server use jest for tests. These can be run by within each directory by running `npm test`


# Notes

Given more time, I would have developed the following: 
- Hidden the API-KEY for the News API in an environment variable
- Written unit tests
- Developed a better data storage and access system - I've currently had to leave the country code hardcoded. This needs to be passed as a prop via a parent component, possibly the router