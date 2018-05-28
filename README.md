# MuiDux [![Build Status](https://travis-ci.org/facebookincubator/create-react-app.svg?branch=master)](https://travis-ci.org/facebookincubator/create-react-app)

MuiDux adds Redux and Material-UI to create-react-app, saving you setup time. Below, you'll learn about the layout and see the simple examples included for each technology included.

## Quick Start

```sh
#Install dependencies
yarn or npm install

#Serve on localhost:3000
yarn start or npm start
```

## Layout
The file structure of MuiDux closely resembles create-react-app. A state folder has been added to /src and has a store and reducer already setup for Redux.<br />
For style, the design pattern has been adjusted to resemble Material-UI's patterns.

## Added Dependencies
`@material-ui/core` - adds [Material-UI v1](https://material-ui.com/)<br />
`@material-ui/icons` - enables usage of official Material-UI Icons<br />
`history` - let's you manage session history anywhere JavaScript runs<br />
`mdi-material-ui` - enables usages of [Material Design Icons](https://materialdesignicons.com/)<br />
`prop-types` - runtime type checking for React props and similar objects<br />
`react-jss` - provides components for JSS as a layer of abstraction<br />
`react-redux` - official React bindings for Redux<br />
`redux` - manages state<br />

## Additions to create-react-app
<hr />

`public/index.html` - Two links were added for Material-UI to give access to Google's Roboto font and Material Icons.

`src/.circleci` - This folder has the file config.yml to add CircleCI for testing code pushed to GitHub.

`src/App.js` - For styling, the external stylesheet was replaced with inline styles (a design pattern that Material-UI utilizes). Also, index.css was removed as CssBaseline takes care of css reset features.<br />

The Button serves as an example of importing and using Material-UI components. Simply import the component at the top of the file and use the tag wherever desired. Each Material-UI component has specific props that can be used which can be explored on the Material-UI [site](https://material-ui.com/) by clicking the Component API tab.<br />

Redux is also included in App.js simply to show that the store and reducer are connected. The Button has an onClick of updatedExampleText which updates state. To see this in action, click on the GO CREATE button, open your console, and check the Redux tab to see the updated state.

`index.js` - Provider and store were added to connect your app to Redux for managing state.

`src/state` - The state folder contains store.js (which includes code to enable Redux DevTools) and reducer.js with an example of updating state.
<hr />

## Testing
[CircleCI](https://circleci.com/) was added for automated testing. When submitting Pull Requests on GitHub, CircleCI will check to make sure your tests have passed.<br />
To run tests, use `yarn test` or `npm test` then press `a` to run all tests.

## Planning Your Project
The [Trello Front-End Planner](https://trello.com/b/ADUo65SK) has cards and checklists designed to help you plan and organize your project. To copy the [Trello board](https://trello.com/b/ADUo65SK) for your own use, visit the link and do the following:
* Click Show Menu
* Click More
* Click Copy Board

# Sending Feedback

Spot any issues? Send your feedback [here](https://github.com/MightyJoeW/muidux/issues).