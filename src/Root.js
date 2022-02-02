// create redux Provider here instead of index.js to have tests run correctly
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; //middleware is the reduxPromise
//import reduxPromise from "redux-promise"; //no longer being used since i worte my own middleware
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState /* this can be passed as a prop from the testing files and NOT {}*/,
    applyMiddleware(async, stateValidator) //redux can work with async action creators now / stateValidator validates data inside the state, does not matter which one is first
  );

  return (
    <Provider store={store}>
      {children}
      {/* refers to the <App/> in the index.js */}
    </Provider>
  );
};

export default Root;
