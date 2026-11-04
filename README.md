# CRUD with HTTP Requests

Create, Read, Update and Delete operations against the JSONPlaceholder test API,
written three ways: raw `fetch`, a reusable `fetch` helper, and `axios`.

## Run
npm install
npm run fetch   # raw fetch, one example per HTTP method
npm start       # reusable helper from http.js with error handling
npm run axios   # the same operations with axios

## HTTP methods
- GET: read data
- POST: create new data (returns 201)
- PUT: replace a whole resource
- PATCH: update only some fields
- DELETE: remove a resource