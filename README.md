# Test Feed Client
A React web client with a single component for a notification feed.

Written in ReactJS with create-react-app CLI. The web client retrieves notification feed data from a NodeJS REST API and displays a summarised list of the data when the bell icon is clicked.


## Installation
* Either `git clone` or download and unzip the repository.
* Run `npm install` to download dependencies.
* Set `REACT_APP_API_PORT` environment variable to match the Node API (defaults to 3001).
* Set `REACT_APP_API_URL` environment variable to match the Node API URL(defaults to http://localhost:${REACT_APP_API_PORT}/userfeed where ${REACT_APP_API_PORT} is the previously set environment variable).
* Run `node server.js` in the root directory of the project (or use whatever tool you run node programs with).

## Deployment
#### Development
Run `npm start`
#### Production
Run `npm run build` and then configure your web server to point to the build folder


## Testing
To run the tests for the project, run `npm test`.

