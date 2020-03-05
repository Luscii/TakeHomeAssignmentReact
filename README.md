This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Luscii React/Redux/Saga Take Home Assignment

Welcome to the Luscii take home assignment for web developers.

Your assignment is to improve te code base of this simple web application. You should allocate a maximum of three hours to refactor and improve the codebase.

## Detailed Instructions

### 0. Run the code
0. Clone this repository. Run the application by invoking `yarn start` in the project directory. This should launch a browser pointing to [http://localhost:3000](http://localhost:3000) with the project.

### 1. Project structure
1. The application is written in React, uses Redux for state management and Saga for side-effects middleware.

The project has three pages. A static home page, and two 'dynamic' pages that use the redux store to render a list of band members and a list of albums. While the data is being fetched, a loading indicator appears.

The code is structured as follows:

- `index.js` sets up the redux store and middleware, and renders the top-level `App` component.
- `App.js` is the top level component and handles the routing between the three pages.
- `components` contain the react components used by `App`.
- `redux` contains all the state management
  - `actions` contains the that can be fired
  - `reducers` update the state from the actions
  - `sagas` contain the side-effects that are run when actions occur. These are asynchronously executed to mimic remote API calls.

### 2. Improve this code base.
As you may have noticed, the code in this project does not necessarily follow the best practices of React development. Moreover, if you would want to add a new dynamic page component, you would have to reproduce quite a lot of code to get something to work.

It is your job to improve this code base.

- It should be easy to add a dynamic pages while duplicating as little code and functionality as possible
- You're allowed to make any change you want to the components and middleware, as long as the functionality keeps working.

### 3. Hand it in.
Hand in the changes you made by opening a pull request. Don't worry if you cannot complete everything you have in mind. Focus on implementing the changes you feel would add the most value. If you have more ideas than you have time for keep them in mind so we can discuss them during the follow-up interview.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
