//middlewares are functions that return each other (REDUX)
export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // Check to see if action has a promise on its 'payload' property
    //if it does, then wait for it to resolve, if it doesn't - send action to next middleware
    /* debugger; */

    if (!action.payload || !action.payload.then) {
      return next(action);
    } else {
      // we want to wait for the promise to resolve (get its data), then create a new action with the data and dispatch it
      action.payload.then((response) => {
        const newAction = { ...action, payload: response };
        dispatch(newAction); //this will send the new action though the whole process again;
      });
    }
  };

//next is talking about the next function in the middleware
