//this middleware should send the action directly to the reducers at first, update state, then run though to be validated
import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    //getState pulls state from redux store against the stateSchema
    if (!tv4.validate(getState(), stateSchema)) {
      console.warn("invalid state schema");
    }
  };
