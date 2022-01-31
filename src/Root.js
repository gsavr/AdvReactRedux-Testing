// create redux Provider here instead of index.js to have tests run correctly
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; //middleware is the reduxPromise
import reduxPromise from "redux-promise";
import reducers from "reducers";

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState /* this can be passed as a prop from the testing files and NOT {}*/,
    applyMiddleware(reduxPromise) //redux can work with asycn action creators now
  );

  return (
    <Provider store={store}>
      {children}
      {/* refers to the <App/> in the index.js */}
    </Provider>
  );
};

export default Root;
